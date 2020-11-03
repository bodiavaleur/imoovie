import * as firebase from "firebase";
import { firebaseConfig } from "./firebaseConfig";

const fb = firebase.initializeApp(firebaseConfig);
const database = firebase.firestore(fb);

export const signUpUser = async (email, password) => {
  /* Sign up user */
  const dbDefaults = {
    watchlist: [],
    favorites: [],
  };

  const signData = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);

  // Set default data for new users
  await database.collection("users").doc(signData.user.uid).set(dbDefaults);

  return signData;
};

export const signInUser = async (email, password) => {
  /* Sign in user */
  const signData = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);

  return signData;
};

export const getUserData = async (userId, type = "") => {
  /* Get user data from database */
  const userData = await database.collection("users").doc(userId);
  const doc = await userData.get();

  if (!doc.exists) {
    return null;
  }

  return type ? doc.data()[type] : doc.data();
};

export const addUserContent = async (addTo, userId, content, type, isExist) => {
  /* Add content to user favorites or watchlist */

  // prevent making changes to other data
  if (addTo !== "favorites" && addTo !== "watchlist") {
    debugger;
    return false;
  }

  const userData = await database.collection("users").doc(userId);
  const doc = await userData.get();
  let data = doc.data();

  if (isExist) {
    // to remove from data if already exist
    data[addTo] = data[addTo].filter((item) => item.id !== content.id);

    return userData.set({
      ...data,
      [addTo]: data[addTo],
    });
  }

  return userData.set({
    ...data,
    [addTo]: [
      ...data[addTo],
      {
        id: content.id,
        title: content.title || content.original_name,
        poster_path: content.poster_path,
        media_type: type,
      },
    ],
  });
};
