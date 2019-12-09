import { GET_USERS } from "../actions/types";

const INITIAL_STATE = {
  users: [
    {
      name: "Sebastian Barcenas",
      read_for: "Daniel Vengoechea",
      date: Date.now()
    },
    {
      name: "Sebastian Barcenas",
      read_for: "Daniel Vengoechea",
      date: Date.now()
    }
  ]
};

export default function(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case GET_USERS:
      return { ...state };
    default:
      return state;
  }
}
