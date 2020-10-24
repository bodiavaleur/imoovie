import * as firebase from "firebase";
import { firebaseConfig } from "./firebaseConfig";

const fb = firebase.initializeApp(firebaseConfig);

export const signUpUser = async (email, password) => {
  /* Sign up user */
  const signData = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
  return signData;
};

export const signInUser = async (email, password) => {
  /* Sign in user */
  const signData = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
  return signData;
};
