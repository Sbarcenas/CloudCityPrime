import { ADD_BENEFITS, BENEFITS_LOADING, GET_BENEFITS } from "../actions/types";

const INITIAL_STATE = {
  loading: false,
  benefits: [

  ]
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
        loading: false,
      };
    default:
      return state;
  }
}
