import firebase from "firebase";
import * as types from "../constants";

export const postSuccess = () => ({ type: types.POST_SUCCESS });

export const postError = errorMessage => ({
    type: types.POST_ERROR,
    errorMessage
});

export const onPost = (content) => {
    return (dispatch, getState) => {
        const { userId, userName } = getState().auth;
        // const { checkedNum, lovedNum, commentNum, title, user, comment }

        if (userId !== 0) {
            const postQuery = firebase.database().ref("posts");
            postQuery.push({
                    userId,
                    userName,
                    ...content,
                    postTime: firebase.database.ServerValue.TIMESTAMP,
                })
                .then(dispatch(postSuccess()))
                .catch(error => {
                    dispatch(postError(error));
                });
        } else {
            dispatch(postError("Not log in yet!"));
        }
    };
};