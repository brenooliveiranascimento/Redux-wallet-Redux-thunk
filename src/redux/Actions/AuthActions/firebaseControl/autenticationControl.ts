/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
import firebase from '../../../../Services/firebase_connection';
import { userDataModules } from '../AuthTypes';

const NOW_USER = 'NOW_USER';

export const saveUserInStore = (userData: any) => localStorage.setItem(NOW_USER, JSON.stringify(userData));
const getLocalUSer: any = localStorage.getItem(NOW_USER);
export const getUserData = () => JSON.parse(getLocalUSer);

const mountUserObj = (userData: any, name: string): userDataModules => ({
  uid: userData.uid,
  email: userData.email,
  name,
  balance: 0,
  expenses: [],
});

export const createUserData = async (userData: any, name: string) => {
  try {
    await firebase.firestore().collection('users')
      .doc(userData.uid).set(mountUserObj(userData, name));
    await saveUserInStore(userData);
    return mountUserObj(userData, name);
  } catch (error: any) {
    alert(error.message);
  }
};

export const createUserAccountInStore = async (email: string, password: string) => {
  try {
    const createAccount = await firebase.auth()
      .createUserWithEmailAndPassword(email, password);
    return createAccount;
  } catch (error: any) {
    alert(error.message);
  }
};

export const signInUser = async (email: string, password: string) => {
  try {
    const signIn = await firebase.auth()
      .signInWithEmailAndPassword(email, password);
    return await signIn;
  } catch (error: any) {
    alert(error.message);
  }
};

export const getUserDataInDataBase = async (userData: any) => {
  try {
    const fetchUserData = await firebase.firestore()
      .collection('users').doc(userData.uid).get();
    saveUserInStore(fetchUserData.data());
    return await fetchUserData.data();
  } catch (error: any) {
    console.log(error.message);
  }
};
