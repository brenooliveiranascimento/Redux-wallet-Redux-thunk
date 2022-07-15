/* eslint-disable arrow-body-style */
/* eslint-disable max-len */
import { Dispatch } from 'react';

import {
  fetchUserTypes,
  signInUserTypes,
} from './AuthTypes';

import {
  createUserAccountInStore,
  createUserData,
  getUserDataInDataBase,
  signInUser,
} from './firebaseControl/autenticationControl';
import {
  fetchUserDataInit,
  fetchUserFailure,
  fetchUserSuccsess,
  signInUserFailure,
  signInUserInit,
  signInUserSuccess,
} from './genericActions';

export const createUserAccount = (email: string, password: string, name: string): any => {
  return async (dispatch: Dispatch<fetchUserTypes>) => {
    dispatch(fetchUserDataInit());
    try {
      const getUserInfInDataBase = await createUserAccountInStore(email, password);
      const userData = await createUserData(getUserInfInDataBase?.user, name);
      await dispatch(fetchUserSuccsess(userData));
    } catch (error: any) {
      dispatch(fetchUserFailure(error.message));
    }
  };
};

export const signInUserWithEmailEndPassword = (email: string, password: string): any => {
  return async (dispatch: Dispatch<signInUserTypes>) => {
    dispatch(signInUserInit());
    try {
      const signIn = await signInUser(email, password);
      const userData = await getUserDataInDataBase(signIn?.user);
      await dispatch(signInUserSuccess(userData));
    } catch (error: any) {
      dispatch(signInUserFailure(error.message));
    }
  };
};
