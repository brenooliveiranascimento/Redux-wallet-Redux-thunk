import { stateTypes, actionTypes } from '../types/userReducerTypes';
import {
  FETCH_USER_DATA,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  SIGNIN_USER_INIT,
  SIGNIN_USER,
  SIGNIN_USER_FAILURE,
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
  console.log(state);
  switch (action.type) {
    case FETCH_USER_DATA:
      return { ...state, loading: action.loading };
    case FETCH_USER_SUCCESS:
      return { ...state, loading: action.loading, userData: action.userData };
    case FETCH_USER_FAILURE:
      return { ...state, loading: action.loading, error: action.error };
    case SIGNIN_USER_INIT:
      return { ...state, loading: action.loading };
    case SIGNIN_USER:
      return { ...state, loading: action.loading, userData: action.userData };
    case SIGNIN_USER_FAILURE:
      return { ...state, localStorage: action.loading };
    default:
      return state;
  }
}

export default userReducer;
