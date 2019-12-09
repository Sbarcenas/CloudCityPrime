import { GET_BENEFITS } from "../actions/types";

const INITIAL_STATE = {
  benefits: [
    {

      name: "Sebastian Barcenas",
      read_for: "Daniel Vengoechea",
      client: "Ezequien Bahoque",
      date: Date.now()
    },
    {
      name: "Sebastian Barcenas",
      read_for: "Daniel Vengoechea",
      client: "Ezequien Bahoque",
      date: Date.now()
    }
  ]
};

export default function(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case GET_BENEFITS:
      return { ...state };
    default:
      return state;
  }
}
