/* eslint-disable arrow-body-style */
/* eslint-disable max-len */
import { Dispatch } from 'react';

import {
  FETCH_USER_DATA,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  fetchUserTypes,
  SIGNIN_USER,
  signInUserTypes,
} from './AuthTypes';

import {
  createUserAccountInStore,
  createUserData,
  signInUser,
} from './firebaseControl/autenticationControl';

export const fetchUserData = (): fetchUserTypes => ({
  type: FETCH_USER_DATA,
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

export const createUserAccount = (email: string, password: string, name: string): any => {
  return async (dispatch: Dispatch<fetchUserTypes>) => {
    dispatch(fetchUserData());
    try {
      const getUserDataInDataBase = await createUserAccountInStore(email, password);
      const userData = await createUserData(getUserDataInDataBase?.user, name);
      await dispatch(fetchUserSuccsess(userData));
    } catch (error: any) {
      dispatch(fetchUserFailure(error.message));
    }
  };
};

export const signInUserWithEmailEndPassword = (email: string, password: string) => {
  return async (dispatch: Dispatch<signInUserTypes>) => {
    dispatch(fetchUserData());
    try {
      const signIn = await signInUser(email, password);
      const userData = signIn?.user;
      dispatch(signInUserSuccess(userData));
    } catch (error: any) {
      dispatch(fetchUserFailure(error.message));
    }
  };
};
