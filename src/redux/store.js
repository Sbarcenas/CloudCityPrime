import { applyMiddleware, createStore, compose } from "redux";
import { rootReducer } from "./reducers/index";
import thunk from "redux-thunk";

const INITIAL_STATE = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  INITIAL_STATE,
  applyMiddleware(...middleware)
);

export default store;
