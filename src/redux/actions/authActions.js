// Load User
import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  USER_LOADING
} from "./types";
import { rest } from "../../services/feathers/conf";

export const LOAD_USER = () => (dispatch, getState) => {
  // User Loading
  dispatch({
    type: USER_LOADING
  });
  // Get Token from localStorage
  const token = getState().auth.token;
};

export const LOGIN = ({ email, password }) => async dispatch => {
  LOAD_USER();
  return rest
    .authenticate({ strategy: "local", email, password })
    .then(res =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res
      })
    )
    .catch(e => dispatch({ type: LOGIN_FAIL }));
};

export const LOGIN_VER = () => async dispatch => {
  LOAD_USER();

  return rest
    .authenticate({
      strategy: "jwt",
      accessToken: localStorage.getItem("feathers-jwt")
    })
    .then(res =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res
      })
    )
    .catch(e => dispatch({ type: LOGIN_FAIL }));
};

export const LOGOUT = () => dispatch => {
  dispatch({
    type: LOGOUT_SUCCESS
  });
};
