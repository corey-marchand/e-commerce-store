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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  console.log(snapShot);

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName, 
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
        console.log('error creating user', error.message);
    }
  }

  return userRef;
}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
