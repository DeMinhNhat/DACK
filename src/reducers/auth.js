import * as types from "../constants";

export const auth = (state = {}, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                ...action.auth,
                isUserSignedIn: true
            };
        case types.LOGOUT_SUCCESS:
            return {
                ...state,
                ...action.auth,
                isUserSignedIn: false
            };
        case types.SIGNUP_SUCCESS:
            return {
                ...state,
                ...action.auth,
                isUserSignedIn: true
            };
        default:
            return state;
    }
};