import { stateTypes, actionTypes } from '../types/userReducerTypes';
import {
  FETCH_USER_DATA,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  // signInUserTypes,
  // SIGNIN_USER,
  // SIGNIN_USER_FAILURE,
  // SIGNIN_USER_INIT,
} from '../../Actions/AuthActions/AuthTypes';

const INITIAL_VALUE: stateTypes = {
  userData: {
    name: '',
    email: '',
    uid: '',
    balance: 0,
    expenses: [],
  },
  error: '',
  loading: false,
};

const INITIAL_VALUE_ACTION: actionTypes = {
  type: '',
  userData: {},
  error: '',
  loading: false,
};

function userReducer(state = INITIAL_VALUE, action = INITIAL_VALUE_ACTION) {
  console.log(action);
  switch (action.type) {
    case FETCH_USER_DATA:
      return { ...state, loading: action.loading };
    case FETCH_USER_SUCCESS:
      return { ...state, loading: action.loading, userData: action.userData };
    case FETCH_USER_FAILURE:
      return { ...state, loading: action.loading, error: action.error };
    default:
      return state;
  }
}

export default userReducer;
