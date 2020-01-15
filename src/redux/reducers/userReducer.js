import {
  ADD_USER,
  EXPORT_FAILED,
  EXPORT_USERS_HISTORY,
  GET_USERS,
  USER_LOADING
} from "../actions/types";

const INITIAL_STATE = {
  users: []
};

export default function(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case GET_USERS:
      return { ...state, users: payload, isLoading: false };
    case USER_LOADING:
      return {
        ...state
      };
    case ADD_USER:
      return { ...state };
    case EXPORT_USERS_HISTORY:
      return { ...state, loading: false };
    case EXPORT_FAILED:
      return { ...state, loading: false };
    default:
      return state;
  }
}
