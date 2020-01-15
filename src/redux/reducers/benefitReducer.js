import {
  ADD_BENEFITS,
  BENEFITS_LOADING,
  EXPORT_BENEFITS_HISTORY,
  EXPORT_FAILED,
  GET_BENEFITS
} from "../actions/types";

const INITIAL_STATE = {
  loading: false,
  benefits: []
};

export default function(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case GET_BENEFITS:
      return {
        ...state,
        benefits: payload,
        loading: false
      };
    case BENEFITS_LOADING:
      return {
        ...state,
        loading: true
      };
    case ADD_BENEFITS:
      return {
        ...state,
        benefits: [...state.benefits, payload],
        loading: false
      };
    case EXPORT_BENEFITS_HISTORY:
      return { ...state, loading: false };
    case EXPORT_FAILED:
      return { ...state, loading: false };
    default:
      return state;
  }
}
