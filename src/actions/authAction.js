// import firebase from "firebase";
import * as types from "../constants";

export const logInSuccess = user => ({
  type: types.LOGIN_SUCCESS,
  auth: user
});

export const logInError = errorMessage => ({
  type: types.LOGIN_ERROR,
  errorMessage
});

export const onLogIn = user => {
  return dispatch => {
    // const { userName, password } = user;
    // const userQuery = firebase.database().ref(`users/`);

    // userQuery.orderByChild('userName')
    //     .equalTo(userName)
    //     .once('value')
    //     .then((snapshot) => {
    //         let data = snapshot.val();
    //         const userId = Object.keys(data).find(key => key);

    //         const thisUser = { userId, ...data[userId] };
    //         if (thisUser.password === password) {
    //             dispatch(logInSuccess(thisUser));
    //         } else { dispatch(logInError("Log in error")); }
    //     })
    //     .catch(error => {
    //         dispatch(logInError(error));
    //     });
    logInSuccess(user);
  };
};
//
export const logOutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
  auth: {}
});

export const logOutError = errorMessage => ({
  type: types.LOGOUT_ERROR,
  errorMessage
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

// export const onSignUp = (user) => {
//     return (dispatch) => {
//         const thisUser = { ...user };
//         const userQuery = firebase.database().ref("users");

//         userQuery.orderByChild('userName')
//             .equalTo(thisUser.userName)
//             .once('value')
//             .then((snapshot) => {
//                 if (snapshot.val()) {
//                     dispatch(signUpError('userName exists'));
//                 } else {
//                     userQuery.push({
//                             ...thisUser,
//                         })
//                         .then(dispatch(signUpSuccess(user)))
//                         .catch(err => {
//                             dispatch(signUpError(err));
//                         });
//                 }
//             });
//     }
// };
