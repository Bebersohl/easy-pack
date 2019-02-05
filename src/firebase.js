import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import {
  REACT_APP_APIKEY,
  REACT_APP_AUTHDOMAIN,
  REACT_APP_DATABASEURL,
  REACT_APP_PROJECTID,
  REACT_APP_STORAGEBUCKET,
  REACT_APP_MESSAGINGSENDERID
} from "react-native-dotenv";

const config = {
  apiKey: process.env.REACT_APP_APIKEY || REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN || REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL || REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID || REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET || REACT_APP_STORAGEBUCKET,
  messagingSenderId:
    process.env.REACT_APP_MESSAGINGSENDERID || REACT_APP_MESSAGINGSENDERID
};

firebase.initializeApp(config);

export default firebase;

export const db = firebase.firestore();

db.settings({});

export const auth = firebase.auth();

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const facebookTwitterAuthProvider = new firebase.auth.FacebookAuthProvider();
