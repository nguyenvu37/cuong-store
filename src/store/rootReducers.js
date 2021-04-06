import { combineReducers } from "redux";
import { deptReducer } from "../pages/main/redux";

const appReducer = combineReducers({
  deptReducer,
});

export default appReducer;
