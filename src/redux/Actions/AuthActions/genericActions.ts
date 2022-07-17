import { FETCH_WALLET_DATA, FETCH_WALLET_FAILURE, FETCH_WALLET_SUCCESS } from '../WalletActions/walletTypes';
import {
  fetchUserTypes,
  FETCH_USER_DATA,
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
  signInUserTypes,
  SIGNIN_USER,
  SIGNIN_USER_FAILURE,
  SIGNIN_USER_INIT,
  SIGNOUT_USER,
} from './AuthTypes';

export const fetchUserDataInit = (): fetchUserTypes => ({
  type: FETCH_USER_DATA,
  loading: true,
  error: '',
  userData: {},
});

export const signInUserInit = (): signInUserTypes => ({
  type: SIGNIN_USER_INIT,
  loading: true,
  error: '',
  userData: {},
});

export const signInUserSuccess = (userData: any): signInUserTypes => ({
  type: SIGNIN_USER,
  loading: false,
  error: '',
  userData,
});

export const signInUserFailure = (errorMessage: any): signInUserTypes => ({
  type: SIGNIN_USER_FAILURE,
  loading: false,
  error: errorMessage,
  userData: {},
});

export const fetchUserSuccsess = (userData: any): fetchUserTypes => ({
  type: FETCH_USER_SUCCESS,
  loading: false,
  error: '',
  userData,
});

export const fetchUserFailure = (errorMessage: string): fetchUserTypes => ({
  type: FETCH_USER_FAILURE,
  loading: false,
  error: errorMessage,
  userData: {},
});

export const signOut = () => ({
  type: SIGNOUT_USER,
  userData: {
    name: '',
    email: '',
    uid: '',
    balance: 0,
    expenses: [],
  },
});

export const getWalletDataInit = () => ({
  type: FETCH_WALLET_DATA,
  payLoad: [],
  loading: true,
  error: '',
});

export const getWalletDataSuccess = (walletInf: any) => ({
  type: FETCH_WALLET_SUCCESS,
  payLoad: walletInf,
  loading: false,
  error: '',
});

export const getWalletFail = () => ({
  type: FETCH_WALLET_FAILURE,
  payLoad: [],
  loading: true,
  error: 'Algo de errado não está certo',
});
