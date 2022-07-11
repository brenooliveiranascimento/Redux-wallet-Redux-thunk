import { actionTypes, stateTypes } from "../types/manegerReducerTypes";

const INITIAL_VALUE: stateTypes = {
  monthlyPayments: [],
  wallet: [],
}

export function manegerReducer(state = INITIAL_VALUE, action: actionTypes) {
  switch(action.type) {
    case 'FETCH_MONTHLY_PAYMENT':
      return state;
    default:
      return state
  }
}