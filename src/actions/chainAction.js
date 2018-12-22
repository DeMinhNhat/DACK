import * as types from "../constants";

export const getSequence = sequence => ({
    type: types.GET_SEQUENCE,
    sequence
});