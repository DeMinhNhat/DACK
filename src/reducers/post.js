import * as types from "../constants";

export const post = (state = {}, action) => {
    switch (action.type) {
        case types.RETRIEVE_POST_SUCCESS:
            return {
                ...state,
                ...action.post,
            };
        default:
            return state;
    }
};