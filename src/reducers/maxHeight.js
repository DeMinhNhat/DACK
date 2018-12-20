import * as types from "../constants";

export const maxHeight = (state = 10000, action) => {
    switch (action.type) {
        case types.GET_HEIGHT:
            return action.maxHeight;
        default:
            return state;
    }
};