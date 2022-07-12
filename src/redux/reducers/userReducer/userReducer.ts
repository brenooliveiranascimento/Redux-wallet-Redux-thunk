import { stateTypes, actionTypes } from '../types/userReducerTypes';

const INITIAL_VALUE: stateTypes = {
  userData: {
    name: '',
    email: '',
    uid: '',
    balance: 0,
    expenses: [],
  },
};

const INITIAL_VALUE_ACTION: actionTypes = {
  type: '',
  payload: {},
};

function userReducer(state = INITIAL_VALUE, action = INITIAL_VALUE_ACTION) {
  switch (action.type) {
    case 'FETCH_MONTHLY_PAYMENT':
      return state;
    default:
      return state;
  }
}

export default userReducer;
