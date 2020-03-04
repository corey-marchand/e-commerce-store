import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAd3trvPu469W_jlx2uAn4Z49si4ndokws",
  authDomain: "cheap-hockey-sticks.firebaseapp.com",
  databaseURL: "https://cheap-hockey-sticks.firebaseio.com",
  projectId: "cheap-hockey-sticks",
  storageBucket: "cheap-hockey-sticks.appspot.com",
  messagingSenderId: "602759264956",
  appId: "1:602759264956:web:3fce094c57e3da4610eeb9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
