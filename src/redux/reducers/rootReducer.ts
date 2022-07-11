import { combineReducers } from "redux";
import { manegerReducer } from "./manegersReducer/manegersReducer";

export const rootReducer = combineReducers({
  manegerReducer,
});