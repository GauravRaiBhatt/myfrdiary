import firebase from "firebase";

const firebaseConfig = {
//   my private keys......
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();
const db = firebaseApp.firestore();

export { auth, provider, storage,db ,firebase};

export default db;
