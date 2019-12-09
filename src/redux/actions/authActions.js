// Load User
import { LOGIN_FAIL, LOGIN_SUCCESS, USER_LOADING } from "./types";
import { app } from "../../services/feathers/conf";

export const LOAD_USER = () => (dispatch, getState) => {
  // User Loading
  dispatch({
    type: USER_LOADING
  });

  // Get Token from localStorage

  const token = getState().auth.token;

  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  if (token) {
    config.headers["x-auth-token"] = token;
  }
  /*
    axios.get('api/auth', config)
        .then(res => dispatch({
            type:USER_LOADED,
            payload: res.data
        })).catch(err =>{
            dispatch(returnErrors(err.response.data, err.response.status)
            dispatch({
                type: AUTH_ERROR
            })
    });
  */
  /*
   * axios.get('userAut'
   * */
};

export const LOGIN = ({ email, password }) => async dispatch => {
  //login feathers .then(res =>
  //dispatch({ type: LOGIN_SUCCESS, payload: res.data }).catch(err => {
  //dispatch({
  // type:LOGIN_FAIL
  // });
  //await localStorage.setItem("username", email);
  //await localStorage.setItem("password", password);
  return app
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
  return app
    .authenticate({ strategy: "jwt", accessToken:localStorage.getItem('feathers-jwt')})
    .then(res =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res
      })
    )
    .catch(e => dispatch({ type: LOGIN_FAIL }));
};
