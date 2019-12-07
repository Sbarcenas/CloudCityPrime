import {combineReducers} from "redux";
import {errorReducer, authReducer} from './index'

export default combineReducers({
    error: errorReducer,
    auth: authReducer,
})
