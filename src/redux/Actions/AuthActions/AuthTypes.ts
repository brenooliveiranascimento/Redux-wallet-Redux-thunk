export const FETCH_USER_DATA = 'FETCH_USER_DATA';
export const FETCH_USER_SUCCESS = 'SUCCESS_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export interface userDataModules {
  name: string;
  email: string;
  uid: string;
  balance: number;
  expenses: Array<object>;
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

export type fetchUserTypes = fetchUserData | fetchUserSuccess | fetchUserFailure;
