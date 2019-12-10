import { ADD_BENEFITS, GET_USERS, USER_LOADING } from "./types";
import {
  readUserService,
  readUserTokenHistoryService
} from "../../services/feathers";
import { returnErrors } from "./errorActions";

export const GET_USER = () => dispatch => {
  readUserTokenHistoryService
    .find({
      query: { $limit: 1000, $sort: { id: -1 } }
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
  const token = rawToken.toUpperCase();
   await readUserService.create({ token });
   dispatch(GET_USER()); // To fuck Leo
};
