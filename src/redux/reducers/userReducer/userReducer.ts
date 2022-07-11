import { actionTypes, stateTypes } from "../types/userReducerTypes"

const INITIAL_VALUE: stateTypes = {
  userData: {
   name: '',
   email: '',
   uid: '',
   balance: 0,
   expenses: [],
  }
}

export function userReducer(state = INITIAL_VALUE, action: actionTypes) {
  switch(action.type) {
    case  'FETCH_USER_DATA':
      return state
    default:
      return state
  }
}