/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import { ADD_NEW_RELEASE, CANCEL_NEW_RELEASE } from '../../reducers/editRelease/editReleaseReducer';
import { updateReleaseInWallet } from '../WalletActions/firebaseControl/walletControl';

export const enableEdit = (release: any, indexOfRelease: number) => ({
  type: 'ENABLE_EDIT',
  payLoad: release,
  indexOfRelease,
});

export const cancelEdit = () => ({
  type: 'CANCEL_EDIT',
  payLoad: {},
  indexOfRelease: null,
});

export const saveEdit = () => ({
  type: 'SAVE_EDIT',
  payLoad: {},
  indexOfRelease: null,
});

export const updateReleaseInReducer = (release: any) => ({
  type: 'UPDATE_RELEASE',
  payLoad: release,
});

export const setNewRelease = () => ({
  type: ADD_NEW_RELEASE,
});

export const cancelNewRelease = () => ({
  type: CANCEL_NEW_RELEASE,
});

export const saveEditInDataBase = (userData: any, indexOfRelease: any, releaseInEditing: any): any => {
  console.log(indexOfRelease);
  return async (dispatch: Dispatch<AnyAction>, getState: any) => {
    try {
      const updateRelease = structuredClone(getState().manegerReducer.wallet);
      updateRelease[indexOfRelease] = releaseInEditing;
      console.log(updateRelease);
      await updateReleaseInWallet(userData, updateRelease);
      await dispatch(updateReleaseInReducer(updateRelease));
      dispatch(saveEdit());
    } catch (error: any) {
      console.log(error.message);
    }
  };
};
