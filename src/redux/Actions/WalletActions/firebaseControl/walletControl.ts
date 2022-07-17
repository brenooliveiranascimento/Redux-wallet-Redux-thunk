import firebase from '../../../../Services/firebase_connection';
import { getUserDataInDataBase } from '../../AuthActions/firebaseControl/autenticationControl';

// export const updateReleaseInWallet = async (release: any) => {
//   await firebase.firestore().collection('users').doc(userData.uid).set({
//     wallet: release,
//   })
//     .then(() => alert('dmawiodw'));
// };

export const updateReleaseInWallet = async (userData: any, release: any) => {
  const fetchUserData = await structuredClone(await getUserDataInDataBase(userData));
  fetchUserData.wallet = release;
  await firebase.firestore().collection('users').doc(userData.uid).set(fetchUserData);
};

export const removeReleaseInWallet = async () => {
  // const fetchUserData = await structuredClone(await getUserDataInDataBase(userData));
  // fetchUserData.wallet = release;
  // console.log(fetchUserData);
  // await firebase.firestore().collection('users').doc(userData.uid).set(fetchUserData);
};
