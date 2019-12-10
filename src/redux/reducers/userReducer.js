import {ADD_BENEFITS, ADD_USER, GET_USERS, USER_LOADING} from "../actions/types";

const INITIAL_STATE = {
  users: []
};

export default function(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case GET_USERS:
      return { ...state, users: payload, loading: false };
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
    case ADD_USER:
      return {...state}
    default:
      return state;
  }
}
