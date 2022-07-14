/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
import firebase from '../../../../Services/firebase_connection';
import { userDataModules } from '../AuthTypes';

const NOW_USER = 'NOW_USER';

export const saveUserInStore = (userData: any) => localStorage.setItem(NOW_USER, JSON.stringify(userData));
const getLocalUSer: any = localStorage.getItem(NOW_USER);
export const getUserData = () => JSON.parse(getLocalUSer);

export const createUserData = async (userData: any, name: string) => {
  try {
    const userInf: userDataModules = {
      uid: userData.uid,
      email: userData.email,
      name,
      balance: 0,
      expenses: [],
    };
    await firebase.firestore().collection('users').doc(userData.uid).set(userInf);
    await saveUserInStore(userData);
    return userInf;
  } catch (error: any) {
    console.log(error.message);
  }
};

export const createUserAccountInStore = async (email: string, password: string) => {
  try {
    const createAccount = await firebase.auth().createUserWithEmailAndPassword(email, password);
    return createAccount;
    // await createUserData(createAccount.user, name);
  } catch (error: any) {
    console.log(error.message);
  }
};
