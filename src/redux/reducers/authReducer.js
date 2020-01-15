import {
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  USER_LOADED,
  USER_LOADING,
  LOADING
} from "../actions/types";

const INITIAL_STATE = {
  token: localStorage.getItem("feathers-jwt"),
  isAuthenticated: null,
  isLoading: false,
  user: null
};

export default function(state = INITIAL_STATE, { payload, type }) {
  switch (type) {
    case LOADING:
      return { ...state, isLoading: true };
    case USER_LOADED:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: payload
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      //localStorage.setItem("accessToken", payload.token);

      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        isLoading: false
      };
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAILED:
    case AUTH_ERROR:
      localStorage.removeItem("feathers-jwt");
      localStorage.removeItem("accessToken");
      return {
        ...state,
        accessToken: null,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false
      };
    default:
      return state;
  }
}
