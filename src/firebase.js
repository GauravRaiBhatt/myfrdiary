import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCc_MT6UIxkSBlHqMWKbP3P3dqqEIlQbgg",
  authDomain: "myfrdiary.firebaseapp.com",
  projectId: "myfrdiary",
  storageBucket: "myfrdiary.appspot.com",
  messagingSenderId: "811255873109",
  appId: "1:811255873109:web:3d03076d7630b56e095edc",
  measurementId: "G-XVQ5EV161R",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();
const db = firebaseApp.firestore();

export { auth, provider, storage,db ,firebase};

export default db;
