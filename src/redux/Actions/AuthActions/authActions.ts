/* eslint-disable arrow-body-style */
/* eslint-disable max-len */
import { Dispatch } from 'react';
import {
  FETCH_USER_DATA, FETCH_USER_SUCCESS, FETCH_USER_FAILURE, fetchUserTypes,
} from './AuthTypes';
import { createUserAccountInStore, createUserData } from './firebaseControl/autenticationControl';

export const fetchUserData = () => ({
  type: FETCH_USER_DATA,
  loading: true,
  error: '',
});

export const fetchUserSuccsess = (userData: any): fetchUserTypes => ({
  type: FETCH_USER_SUCCESS,
  loading: false,
  error: '',
  userData,
});

export const fetchUserFailure = (): fetchUserTypes => ({
  type: FETCH_USER_FAILURE,
  loading: false,
  error: 'Error of conection',
  userData: {},
});

export const createUserAccount = (email: string, password: string, name: string): any => {
  return async (dispatch: Dispatch<fetchUserTypes>) => {
    try {
      const getUserDataInDataBase = await createUserAccountInStore(email, password);
      const userData = await createUserData(getUserDataInDataBase?.user, name);
      // await dispatch(fetchUserSuccsess(getUserData()));
      await dispatch(fetchUserSuccsess(userData));
    } catch (error: any) {
      console.log(error.message);
    }
  };
};

fetchUserData();
