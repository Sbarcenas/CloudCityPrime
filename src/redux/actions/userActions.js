import {
  EXPORT_FAILED,
  EXPORT_USERS_HISTORY,
  GET_USERS,
  MESSAGE,
  USER_LOADING
} from "./types";
import {
  readUserService,
  readUserTokenHistoryService,
  userHistory
} from "../../services/feathers";
import { clearErrors, returnErrors } from "./errorActions";
import { CLEAR_MESSAGE } from "./messageActions";

export const GET_USER = () => dispatch => {
  readUserTokenHistoryService
    .find({
      query: { $limit: 50, $sort: { id: -1 } }
    })
    .then(({ data }) => {
      dispatch({
        type: GET_USERS,
        payload: data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const SET_USERS_LOADING = () => {
  return {
    type: USER_LOADING
  };
};

export const ADD_USER = rawToken => async dispatch => {
  dispatch(SET_USERS_LOADING());
  dispatch(clearErrors());
  dispatch(CLEAR_MESSAGE());
  let token;
  if (rawToken) {
    token = rawToken.toUpperCase();
  }
  readUserService
    .create({ token })
    .then(() => {
      dispatch({
        type: MESSAGE,
        payload: "Usuario escaneado con exito"
      });
      dispatch(GET_USER());
    })
    .catch(e => {
      dispatch(returnErrors(e.message, e.status, null));
    });
};

export const EXPORT_USER_HISTORY = () => dispatch => {
  dispatch({
    type: USER_LOADING
  });

  return userHistory
    .create({})
    .then(res => {
      dispatch({
        type: EXPORT_USERS_HISTORY
      });
      return res;
    })
    .catch(e => {
      dispatch({
        type: EXPORT_FAILED
      });
    });
};
