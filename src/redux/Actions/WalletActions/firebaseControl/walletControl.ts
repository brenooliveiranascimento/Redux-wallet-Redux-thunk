import firebase from '../../../../Services/firebase_connection';

// export const updateReleaseInWallet = async (release: any) => {
//   await firebase.firestore().collection('users').doc(userData.uid).set({
//     wallet: release,
//   })
//     .then(() => alert('dmawiodw'));
// };

export const updateReleaseInWallet = async (userData: any, release: any) => {
  await firebase.firestore().collection('users').doc(userData.uid).set({
    wallet: release,
  })
    .then(() => alert('dmawiodw'));
};

export const removeReleaseInWallet = async () => {

};
