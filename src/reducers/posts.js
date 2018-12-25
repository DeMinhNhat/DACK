import * as types from "../constants";

export const posts = (state = [], action) => {
    switch (action.type) {
        case types.RETRIEVE_POST_SUCCESS:
            return [action.post,...state];
        default:
            return state;
    }
};