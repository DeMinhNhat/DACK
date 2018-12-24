import * as types from "../constants";

export const followings = (state = [], action) => {
    switch (action.type) {
        case types.GET_FOLLOWING_SUCCESS:
            return [
                ...action.followings,
            ];
        default:
            return state;
    }
};