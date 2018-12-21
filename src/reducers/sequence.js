import * as types from "../constants";

export const sequence = (state = 36, action) => {
    switch (action.type) {
        case types.GET_SEQUENCE:
            return action.sequence;
        default:
            return state;
    }
};