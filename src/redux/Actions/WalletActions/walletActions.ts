/* eslint-disable arrow-body-style */
/* eslint-disable max-len */
import { Dispatch } from 'react';
import { updateReleaseInWallet } from './firebaseControl/walletControl';

export const addReleaseInWallet = (release: any) => ({
  type: 'ADD_RELEASE',
  payLoad: release,
  loading: false,
  error: '',
});

export const removeReleaseInWallet = (release: any) => ({
  type: 'REMOVE_RELEASE',
  payLoad: release,
  loading: false,
  error: '',
});

export const removeReleaseInDataBase = (userData:any, release: any): any => {
  return async (dispatch: Dispatch<any>, getState: any) => {
    try {
      const getUserData = structuredClone(getState().manegerReducer.wallet);
      const removeRelease = getUserData.filter(({ releaseDataId }: any) => releaseDataId !== release.releaseDataId);
      await updateReleaseInWallet(userData, removeRelease);
      dispatch(removeReleaseInWallet(release));
    } catch (error: any) {
      console.log(error.messag);
    }
  };
};

export const addReleaseInDataBase = (userData: any, release: any): any => {
  return async (dispatch: Dispatch<any>, getState: any) => {
    try {
      const getUserData = structuredClone(getState().manegerReducer.wallet);
      const addRelease = [...getUserData, release];
      await updateReleaseInWallet(userData, addRelease);
      await dispatch(addReleaseInWallet(release));
    } catch (error: any) {
      console.log(error.message);
    }
  };
};
