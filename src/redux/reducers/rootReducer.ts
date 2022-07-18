import { combineReducers } from 'redux';
import manegerReducer from './manegersReducer/manegersReducer';
import userReducer from './userReducer/userReducer';
import editReleaseReducer from './editRelease/editReleaseReducer';

const rootReducer = combineReducers({
  manegerReducer,
  userReducer,
  editReleaseReducer,
});

export default rootReducer;
