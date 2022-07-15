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
  await firebase.firestore().collection('users')
    .doc(userData.uid).set(mountUserObj(userData, name));
  await saveUserInStore(userData);
  return mountUserObj(userData, name);
};

export const createUserAccountInStore = async (email: string, password: string) => {
  const createAccount = await firebase.auth()
    .createUserWithEmailAndPassword(email, password);
  return createAccount;
};

export const signInUser = async (email: string, password: string) => {
  const signIn = await firebase.auth()
    .signInWithEmailAndPassword(email, password);
  return signIn;
};

export const getUserDataInDataBase = async (userData: any) => {
  const fetchUserData = await firebase.firestore()
    .collection('users').doc(userData.uid).get();
  saveUserInStore(fetchUserData.data());
  return fetchUserData.data();
};

export const signOutUser = () => {
  firebase.auth().signOut();
};
