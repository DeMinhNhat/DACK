import axios from "axios";
import * as types from "../constants";
import * as transaction from "../lib/transaction";

export const followingSuccess = () => ({
    type: types.FOLLOWING_SUCCESS,
});

export const followingError = errorMessage => ({
    type: types.FOLLOWING_ERROR,
    errorMessage
});

const encodeFollowingTransaction = function(user, publicKey, dispatch) {
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
            let sequence = transaction.findSequenceAvailable(data, user.public_key);
            const tx = {
                version: 1,
                operation: "following",
                params: {
                    address: publicKey
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
            dispatch(followingSuccess());
        })
        .catch((err) => {
            dispatch(followingError(err));
        });
}

export const onFollowing = (publicKey) => {
    return (dispatch, getState) => {
        const { public_key, private_key } = getState().auth;
        const user = { public_key, private_key };
        encodeFollowingTransaction(user, publicKey, dispatch);
    };
};