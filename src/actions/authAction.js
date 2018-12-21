import axios from "axios";
import * as types from "../constants";
import * as transaction from "../lib/transaction";

export const logInSuccess = user => ({
    type: types.LOGIN_SUCCESS,
    auth: user
});

export const logInError = errorMessage => ({
    type: types.LOGIN_ERROR,
    errorMessage
});

const encodeLoginTransaction = function(user, dispatch) {
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
                operation: "payment",
                params: {
                    address: types.ME_PUBLIC_KEY,
                    // address: 'GDBQEUKMZHVXFLA3GOIB6MB2PBWVRHRHHPOBITY6MQOQBRSHIDSXZCMM',
                    amount: 1,
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
            dispatch(logInSuccess(user));
        })
        .catch((err) => {
            dispatch(logInError(err));
        });
}

export const onLogIn = user => {
    return dispatch => {
        encodeLoginTransaction(user, dispatch);
    };
};
//
export const logOutSuccess = () => ({
    type: types.LOGOUT_SUCCESS,
    auth: {}
});

export const onLogOut = () => {
    return dispatch => {
        dispatch(logOutSuccess());
    };
};
//
export const signUpSuccess = user => ({
    type: types.SIGNUP_SUCCESS,
    auth: user
});

export const signUpError = errorMessage => ({
    type: types.SIGNUP_ERROR,
    errorMessage
});

const encodeSignUpTransaction = function(dispatch) {
    const key = transaction.getKey();
    const public_key = key.publicKey();
    const private_key = key.secret();

    let req = "https://komodo.forest.network/tx_search?query=%22account=%27" + types.PUBLIC_KEY + "%27%22";
    let txEncode = '0x';
    axios.get(req)
        .then(res => {
            const data = res.data.result.txs.map((each) => {
                each.tx = transaction.decodeTransaction(each.tx);
                each.tx.memo = each.tx.memo.toString();
                each.tx.signature = each.tx.signature.toString('hex');
                return each;
            })
            let sequence = transaction.findSequenceAvailable(data, types.PUBLIC_KEY);

            const tx = {
                version: 1,
                operation: "create_account",
                params: {
                    address: public_key
                },
                account: types.PUBLIC_KEY,
                sequence: sequence,
                memo: Buffer.alloc(0),
            };
            transaction.sign(tx, types.SECRET_KEY);
            txEncode = '0x' + transaction.encode(tx).toString('hex');

            return axios.post("https://komodo.forest.network/broadcast_tx_commit?tx=" + txEncode);
        })
        .then((res) => {
            console.log(res);
            const user = { public_key, private_key };
            dispatch(signUpSuccess(user));

        })
        .catch((err) => {
            dispatch(signUpError(err));
        });
}

export const onSignUp = () => {
    return (dispatch) => {
        encodeSignUpTransaction(dispatch);
    }
};
//
export const updateNameSuccess = () => ({
    type: types.UPDATE_NAME_SUCCESS,
});

export const updateNameError = errorMessage => ({
    type: types.UPDATE_NAME_ERROR,
    errorMessage
});

const encodeUpdateNameTransaction = function(user, name, dispatch) {
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
                operation: "update_account",
                params: {
                    key: 'name',
                    value: Buffer.from(name, 'base66'),
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
            dispatch(updateNameSuccess());
        })
        .catch((err) => {
            dispatch(updateNameError(err));
        });
}

export const onUpdateName = (name) => {
    return (dispatch, getState) => {
        const { public_key, private_key } = getState().auth;
        const user = { public_key, private_key };
        encodeUpdateNameTransaction(user, name, dispatch);
    };
};
//
export const updatePicSuccess = () => ({
    type: types.UPDATE_PIC_SUCCESS,
});

export const updatePicError = errorMessage => ({
    type: types.UPDATE_PIC_ERROR,
    errorMessage
});

const encodeUpdatePicTransaction = function(user, pic, dispatch) {
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
                operation: "update_account",
                params: {
                    key: 'picture',
                    value: Buffer.from(pic, 'base64'),
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
            dispatch(updatePicSuccess());
        })
        .catch((err) => {
            dispatch(updatePicError(err));
        });
}

export const onUpdatePic = (pic) => {
    return (dispatch, getState) => {
        const { public_key, private_key } = getState().auth;
        const user = { public_key, private_key };
        encodeUpdatePicTransaction(user, pic, dispatch);
    };
};