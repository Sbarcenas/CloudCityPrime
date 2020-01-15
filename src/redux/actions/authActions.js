// Load User
import {
  CLEAR_ERRORS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  USER_LOADING,
  LOADING
} from "./types";
import { rest } from "../../services/feathers/conf";
import { clearErrors, returnErrors } from "./errorActions";
import { GET_MESSAGE } from "./messageActions";
import { logout } from "../../services/feathers";

export const LOAD = () => (dispatch, getState) => {
  // User Loading
  dispatch({
    type: LOADING
  });
  // Get Token from localStorage
};

export const LOGIN = ({ email, password }) => async dispatch => {
  dispatch(clearErrors());
  return rest
    .authenticate({ strategy: "local", email, password })
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res
      });
      dispatch(GET_MESSAGE("Bienvenido a CityPrime"));
    })
    .catch(e => {
      dispatch({ type: LOGIN_FAIL });
      dispatch(returnErrors(e.message, e.status));
    });
};

export const LOGIN_VER = () => async dispatch => {
  dispatch(clearErrors());
  dispatch(LOAD());
  rest
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
