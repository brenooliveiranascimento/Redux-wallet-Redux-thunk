import firebase from 'firebase';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCwQlNv_5-jiEDvuZkvust82ZFCdV-MkAM',
  authDomain: 'monthly-maneger.firebaseapp.com',
  projectId: 'monthly-maneger',
  storageBucket: 'monthly-maneger.appspot.com',
  messagingSenderId: '747771561804',
  appId: '1:747771561804:web:22e97e3bc944d6217c31e9',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
