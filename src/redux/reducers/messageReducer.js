import { MESSAGE, CLEAR_MESSAGE } from "../actions/types";

const INITIAL_STATE = {
  msg: null
};

export default function(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case MESSAGE:
      return {
        ...state,
        msg: payload
      };
    case CLEAR_MESSAGE:
      return {
        ...state,
        msg: null
      };
    default:
      return state;
  }
}
