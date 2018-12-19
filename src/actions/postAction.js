import axios from "axios";
import * as types from "../constants";
import * as transaction from "../lib/transaction";

export const postSuccess = () => ({ type: types.POST_SUCCESS });

export const postError = errorMessage => ({
    type: types.POST_ERROR,
    errorMessage
});

const encodePostTransaction = function(user, content, dispatch) {
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
            var sequence = transaction.findSequenceAvailable(data, user.public_key);
            const tx = {
                version: 1,
                operation: "post",
                params: {
                    content: Buffer.from(content, 'base64'),
                    keys: []
                },
                account: user.public_key,
                sequence: sequence,
                memo: Buffer.alloc(0),
            }
            transaction.sign(tx, user.private_key);
            txEncode = '0x' + transaction.encode(tx).toString('hex');

            return axios.post("https://komodo.forest.network/broadcast_tx_commit?tx=" + txEncode);
        })
        .then((res) => {
            console.log(res);
            dispatch(postSuccess());
        })
        .catch((err) => {
            dispatch(postError(err));
        });
}

export const onPost = (content) => {
    return (dispatch, getState) => {
        const { public_key, private_key } = getState().auth;
        const user = { public_key, private_key };
        encodePostTransaction(user, content, dispatch);
    };
};

// export const retrievePosts = () => {
//     let num = 4;
//     let link = types.domain + num;
//     axios.get(link)
//         .then((res) => {
//             if (res.data.error === undefined) {
//                 const raw = res.data.result.block.data.txs[0];
//                 const buf = Buffer.from(raw, 'base64');
//                 const data = transaction.decode(buf);
//                 if (data.operation === "payment")
//                     console.log(data);
//             }
//         })
//         .catch(err => {
//             console.log(err);
//         });
// };