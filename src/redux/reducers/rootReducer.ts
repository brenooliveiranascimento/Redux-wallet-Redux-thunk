import { combineReducers } from 'redux';
import manegerReducer from './manegersReducer/manegersReducer';
import userReducer from './userReducer/userReducer';

const rootReducer = combineReducers({
  userReducer,
  manegerReducer,
});

export default rootReducer;
