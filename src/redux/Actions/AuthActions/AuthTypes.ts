export const FETCH_USER_DATA = 'FETCH_USER_DATA';
export const FETCH_USER_SUCCESS = 'SUCCESS_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
export const SIGNIN_USER = 'SIGNIN_USER';
export const SIGNIN_USER_INIT = 'SIGNIN_USER_INIT';
export const SIGNIN_USER_FAILURE = 'SIGNIN_USER_FAILURE';
export const SIGNOUT_USER = 'SIGNOUT_USER';

export interface userDataModules {
  name: string;
  email: string;
  uid: string;
  balance: number;
  expenses: Array<object>;
  currencies: Array<object>;
  monthlyCharges: Array<object>;
}

export interface authDataModules {
  email: string;
  password: string
}

interface authDataTypes {
  userData: authDataModules | any;
  loading: boolean;
  error: string;
}

export interface actionDataTypes {
  userData: userDataModules | any;
  loading: boolean;
  error: string;
}

export interface fetchUserData extends actionDataTypes {
  type: typeof FETCH_USER_DATA
}

export interface fetchUserSuccess extends actionDataTypes {
  type: typeof FETCH_USER_SUCCESS
}

export interface fetchUserFailure extends actionDataTypes {
  type: typeof FETCH_USER_FAILURE
}

export interface signInUser extends authDataTypes {
  type: typeof SIGNIN_USER
}

export interface signInUserInit extends authDataTypes {
  type: typeof SIGNIN_USER_INIT
}

export interface signInUserFailure extends authDataTypes {
  type: typeof SIGNIN_USER_FAILURE
}

export type fetchUserTypes = fetchUserData | fetchUserSuccess | fetchUserFailure;

export type signInUserTypes = signInUser | signInUserInit | signInUserFailure;
