import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDASFYTKGepnr0cR40ZdsAOIKrF2YQ2AgA",
    authDomain: "instagram-clone-reactjs-de14b.firebaseapp.com",
    databaseURL: "https://instagram-clone-reactjs-de14b.firebaseio.com",
    projectId: "instagram-clone-reactjs-de14b",
    storageBucket: "instagram-clone-reactjs-de14b.appspot.com",
    messagingSenderId: "386398419720",
    appId: "1:386398419720:web:788a1cd607170523110abd",
    measurementId: "G-J0Q4HG55DH"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };