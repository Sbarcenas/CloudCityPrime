import { MESSAGE } from "./types";

export const GET_MESSAGE = message => dispatch => {
  dispatch({
    type: MESSAGE,
    payload: message
  });
  setTimeout(() => {
    dispatch(CLEAR_MESSAGE());
  }, 3000);
};

export const CLEAR_MESSAGE = () => {
  return {
    type: MESSAGE
  };
};
