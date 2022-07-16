import { FETCH_WALLET_DATA, FETCH_WALLET_SUCCESS } from '../../Actions/WalletActions/walletTypes';
import { actionTypes, stateTypes } from '../types/manegerReducerTypes';

const INITIAL_VALUE: stateTypes = {
  monthlyPayments: [],
  wallet: [],
  loading: false,
  error: '',
};

const INITIAL_VALUE_ACTION: actionTypes = {
  type: '',
  payLoad: [],
  loading: false,
  error: '',
};

function manegerReducer(state = INITIAL_VALUE, action = INITIAL_VALUE_ACTION) {
  console.log(action);
  switch (action.type) {
    case FETCH_WALLET_DATA:
      return { ...state, loading: action.loading };
    case FETCH_WALLET_SUCCESS:
      return { ...state, wallet: action.payLoad, loading: state.loading };
    default:
      return state;
  }
}

export default manegerReducer;
