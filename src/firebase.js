import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBd3DeNTBH95VMEQAV7UOwho4pj9i_BnDE",
  authDomain: "linkedin-clone-68465.firebaseapp.com",
  projectId: "linkedin-clone-68465",
  storageBucket: "linkedin-clone-68465.appspot.com",
  messagingSenderId: "801892974608",
  appId: "1:801892974608:web:ccdaeb4e37351ce3eb0a95",
  measurementId: "G-6K3X30FF02",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
