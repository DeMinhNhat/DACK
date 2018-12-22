import axios from "axios";
import * as types from "../constants";
import * as transaction from "../lib/transaction";
import * as chainAction from "./chainAction";

export const logInSuccess = (user) => ({
    type: types.LOGIN_SUCCESS,
    auth: user
});

export const logInError = (errorMessage) => ({
    type: types.LOGIN_ERROR,
    errorMessage
});

const encodeLoginTransaction = function(user, dispatch, thisSequence) {
    let req = "https://komodo.forest.network/tx_search?query=%22account=%27" + user.public_key + "%27%22";
    let txEncode = '0x';
    let userName;
    axios.get(req)
        .then(res => {
            const data = res.data.result.txs.map((each) => {
                each.tx = transaction.decodeTransaction(each.tx);
                each.tx.memo = each.tx.memo.toString();
                each.tx.signature = each.tx.signature.toString('hex');
                return each;
            })
            const sequence = transaction.findSequenceAvailable(data, user.public_key);
            userName = transaction.getUserName(data, user.public_key);
            console.log(sequence)
            const tx = {
                version: 1,
                operation: "payment",
                params: {
                    address: 'GAO4J5RXQHUVVONBDQZSRTBC42E3EIK66WZA5ZSGKMFCS6UNYMZSIDBI',
                    amount: 1,
                },
                account: user.public_key,
                sequence: 49,
                memo: Buffer.alloc(0),
            }
            transaction.sign(tx, user.private_key);
            txEncode = '0x' + transaction.encode(tx).toString('hex');

            return axios.post("https://komodo.forest.network/broadcast_tx_commit?tx=" + txEncode);
        })
        .then((res) => {
            console.log(res)
            if (res.data.error === undefined) {
                if (res.data.result.height === "0") {
                    dispatch(logInError('sequence mismatch or st goes wrong'));
                } else {
                    const thisUser = { userName, ...user };
                    dispatch(logInSuccess(thisUser));
                    dispatch(chainAction.getSequence(++thisSequence))
                }
            } else {
                dispatch(logInError(res.data.error.message));
            }
        })
        .catch((err) => {
            dispatch(logInError(err));
        });
}

export const onLogIn = (user) => {
    return (dispatch, getState) => {
        const thisSequence = getState().sequence;
        encodeLoginTransaction(user, dispatch, thisSequence);
    };
};
//
export const logOutSuccess = () => ({
    type: types.LOGOUT_SUCCESS,
    auth: null
});

export const onLogOut = () => {
    return dispatch => {
        dispatch(logOutSuccess());
    };
};
//
export const signUpSuccess = (user) => ({
    type: types.SIGNUP_SUCCESS,
    auth: user
});

export const signUpError = (errorMessage) => ({
    type: types.SIGNUP_ERROR,
    errorMessage
});

const encodeSignUpTransaction = function(dispatch, thisSequence) {
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
            const sequence = transaction.findSequenceAvailable(data, types.PUBLIC_KEY);

            const tx = {
                version: 1,
                operation: "create_account",
                params: {
                    address: public_key
                },
                account: types.PUBLIC_KEY,
                sequence: thisSequence,
                memo: Buffer.alloc(0),
            };
            transaction.sign(tx, types.SECRET_KEY);
            txEncode = '0x' + transaction.encode(tx).toString('hex');

            return axios.post("https://komodo.forest.network/broadcast_tx_commit?tx=" + txEncode);
        })
        .then((res) => {
            if (res.data.error === undefined) {
                if (res.data.result.height === "0") {
                    dispatch(signUpError('sequence mismatch'));
                } else {
                    const user = { public_key, private_key };
                    dispatch(signUpSuccess(user));
                    dispatch(chainAction.getSequence(++thisSequence))
                }
            } else {
                dispatch(signUpError(res.data.error.message));
            }
        })
        .catch((err) => {
            dispatch(signUpError(err));
        });
}

export const onSignUp = () => {
    return (dispatch, getState) => {
        const thisSequence = getState().sequence;
        encodeSignUpTransaction(dispatch, thisSequence);
    }
};
//
export const updateNameSuccess = () => ({
    type: types.UPDATE_NAME_SUCCESS,
});

export const updateNameError = (errorMessage) => ({
    type: types.UPDATE_NAME_ERROR,
    errorMessage
});

const encodeUpdateNameTransaction = function(user, name, dispatch, thisSequence) {
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
            console.log(data)
            const sequence = transaction.findSequenceAvailable(data, user.public_key);

            console.log(sequence)
            const tx = {
                version: 1,
                operation: "update_account",
                params: {
                    key: 'name',
                    value: Buffer.from(name, 'utf8'),
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
            console.log(res)
            if (res.data.error === undefined) {
                if (res.data.result.height === "0") {
                    dispatch(updateNameError('sequence mismatch'));
                } else {
                    dispatch(updateNameSuccess());
                    dispatch(chainAction.getSequence(++thisSequence))
                }
            } else {
                dispatch(updateNameError(res.data.error.message));
            }
        })
        .catch((err) => {
            dispatch(updateNameError(err));
        });
}

export const onUpdateName = (name) => {
    return (dispatch, getState) => {
        const { public_key, private_key } = getState().auth;
        const user = { public_key, private_key };
        const thisSequence = getState().sequence;
        encodeUpdateNameTransaction(user, name, dispatch, thisSequence);
    };
};
//
export const updatePicSuccess = () => ({
    type: types.UPDATE_PIC_SUCCESS,
});

export const updatePicError = (errorMessage) => ({
    type: types.UPDATE_PIC_ERROR,
    errorMessage
});

const encodeUpdatePicTransaction = function(user, pic, dispatch, thisSequence) {
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
                    value: Buffer.from(pic, 'utf8'),
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
            if (res.data.error === undefined) {
                if (res.data.result.height === "0") {
                    dispatch(updatePicError('sequence mismatch'));
                } else {
                    dispatch(updatePicSuccess());
                    dispatch(chainAction.getSequence(++thisSequence))
                }
            } else {
                dispatch(updatePicError(res.data.error.message));
            }
        })
        .catch((err) => {
            dispatch(updatePicError(err));
        });
}

export const onUpdatePic = (pic) => {
    return (dispatch, getState) => {
        const { public_key, private_key } = getState().auth;
        const user = { public_key, private_key };
        const thisSequence = getState().sequence
        encodeUpdatePicTransaction(user, pic, dispatch, thisSequence);
    };
};