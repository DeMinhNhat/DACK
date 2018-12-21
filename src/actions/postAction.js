import axios from "axios";
import * as types from "../constants";
import * as transaction from "../lib/transaction";
import * as chainAction from "./chainAction";

export const postSuccess = () => ({ type: types.POST_SUCCESS });

export const postError = errorMessage => ({
    type: types.POST_ERROR,
    errorMessage
});

const encodePostTransaction = function(user, content, dispatch, thisSequence) {
    let req = "https://komodo.forest.network/tx_search?query=%22account=%27" + user.public_key + "%27%22";
    let txEncode = '0x';
    axios.get(req)
        .then(res => {
            const data = res.data.result.txs.map((each) => {
                each.tx = transaction.decodeTransaction(each.tx);
                each.tx.memo = each.tx.memo.toString();
                each.tx.signature = each.tx.signature.toString('hex');
                return each;
            })
            console.log(data);
            var sequence = transaction.findSequenceAvailable(data, user.public_key);
            console.log(`sequence: ${sequence}`);
            const thisContent = {
                type: 'Buffer',
                data: Buffer.from(content, 'utf8'),
            }
            const tx = {
                version: 1,
                operation: "post",
                params: {
                    content: Buffer.from(thisContent, 'utf8'),
                    keys: []
                },
                account: user.public_key,
                sequence: thisSequence,
                memo: Buffer.alloc(0),
            }
            transaction.sign(tx, user.private_key);
            txEncode = '0x' + transaction.encode(tx).toString('hex');

            return axios.post("https://komodo.forest.network/broadcast_tx_commit?tx=" + txEncode);
        })
        .then((res) => {
            console.log(res);
            if (res.data.error === undefined) {
                if (res.data.result.height === "0") {
                    dispatch(postError('sequence mismatch'));
                } else {
                    dispatch(postSuccess());
                    dispatch(chainAction.getSequence(++thisSequence))
                }
            } else {
                dispatch(postError(res.data.error.message));
            }
        })
        .catch((err) => {
            dispatch(postError(err));
        });
}

export const onPost = (content) => {
    return (dispatch, getState) => {
        const { public_key, private_key } = getState().auth;
        const user = { public_key, private_key };
        const thisSequence = getState().sequence
        encodePostTransaction(user, content, dispatch, thisSequence);
    };
};
//
export const retrievePostSuccess = post => ({
    type: types.RETRIEVE_POST_SUCCESS,
    post: post
});

export const retrievePostError = errorMessage => ({
    type: types.RETRIEVE_POST_ERROR,
    errorMessage
});

export const getHeight = maxHeight => ({
    type: types.GET_HEIGHT,
    maxHeight
});

export const retrievePost = () => {
    return (dispatch, getState) => {
        let maxHeight = getState().maxHeight;
        let link = "https://komodo.forest.network/block?height=" + maxHeight;
        console.log(link)
        axios.get(link)
            .then((res) => {
                if (res.data.error === undefined) {
                    if (res.data.result.block.data.txs === null)
                        dispatch(retrievePostError(`this block (${maxHeight}) has no operation`));
                    else {
                        const raw = res.data.result.block.data.txs[0];
                        const buf = Buffer.from(raw, 'base64');
                        const post = transaction.decode(buf);
                        if (post.operation === "post") {
                            post.params.content = new Buffer(post.params.content, 'base64').toString("utf8");
                            dispatch(retrievePostSuccess(post));
                        } else {
                            dispatch(retrievePostError(`this block (${maxHeight}) is not post operation`));
                        }
                    }
                    dispatch(getHeight(++maxHeight));
                } else {
                    dispatch(retrievePostError("problems with your maxHeight param"));
                    dispatch(getHeight(1));
                }
            })
            .catch(err => {
                dispatch(retrievePostError(err));
            });
    };
};
