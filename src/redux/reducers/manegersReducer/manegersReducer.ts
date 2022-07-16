import { FETCH_WALLET_DATA, FETCH_WALLET_SUCCESS } from '../../Actions/WalletActions/walletTypes';
import { actionTypes, stateTypes } from '../types/manegerReducerTypes';

const ADD_RELEASE = 'ADD_RELEASE';

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
  console.log(state.wallet);
  switch (action.type) {
    case FETCH_WALLET_DATA:
      return { ...state, loading: action.loading };
    case FETCH_WALLET_SUCCESS:
      return { ...state, wallet: action.payLoad, loading: state.loading };
    case ADD_RELEASE:
      return { ...state, wallet: [...state.wallet, action.payLoad] };
    default:
      return state;
  }
}

export default manegerReducer;
