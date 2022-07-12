import { combineReducers } from "redux";
import { manegerReducer } from "./manegersReducer/manegersReducer";
import { userReducer } from "./userReducer/userReducer";

export const rootReducer = combineReducers({
  userReducer,
  manegerReducer,
});