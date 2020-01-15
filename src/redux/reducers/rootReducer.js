import { combineReducers } from "redux";
import {
  errorReducer,
  authReducer,
  userReducer,
  benefitReducer,
  messageReducer
} from "./index";

export default combineReducers({
  error: errorReducer,
  auth: authReducer,
  user: userReducer,
  benefit: benefitReducer,
  message: messageReducer
});
