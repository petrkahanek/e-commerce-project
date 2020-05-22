import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB69fPgfLbPdO8JWumPvhJLwia9eGbAzvs",
  authDomain: "crown-db-1a85e.firebaseapp.com",
  databaseURL: "https://crown-db-1a85e.firebaseio.com",
  projectId: "crown-db-1a85e",
  storageBucket: "crown-db-1a85e.appspot.com",
  messagingSenderId: "1053939867007",
  appId: "1:1053939867007:web:b3fed15bbd3b1ba33a4e4a",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
