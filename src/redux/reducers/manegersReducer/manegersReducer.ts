import { actionTypes, stateTypes } from '../types/manegerReducerTypes';

const INITIAL_VALUE: stateTypes = {
  monthlyPayments: [],
  wallet: [],
};

const INITIAL_VALUE_ACTION: actionTypes = {
  type: '',
  payload: {},
};

function manegerReducer(state = INITIAL_VALUE, action = INITIAL_VALUE_ACTION) {
  switch (action.type) {
    case 'FETCH_MONTHLY_PAYMENT':
      return state;
    default:
      return state;
  }
}

export default manegerReducer;
