import {combineReducers} from "redux";
import {authReducer} from "./authReducer";
import {editStateReducer} from "./editStateReducer";


export const rootReducer = combineReducers({
  auth: authReducer,
  editState: editStateReducer
});
