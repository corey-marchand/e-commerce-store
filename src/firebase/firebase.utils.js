import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCTJV4HElADOFVBrRPKP3QQoCeM5ym2-KM",
    authDomain: "e-commerce-store-253b8.firebaseapp.com",
    databaseURL: "https://e-commerce-store-253b8.firebaseio.com",
    projectId: "e-commerce-store-253b8",
    storageBucket: "e-commerce-store-253b8.appspot.com",
    messagingSenderId: "651981103476",
    appId: "1:651981103476:web:f6920941dd942eb6e78c21",
    measurementId: "G-KTP4KC51QV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
