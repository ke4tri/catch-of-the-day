import Rebase from 're-base';
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCM87dhFikNPjKKpgXP3e_lMJpqoNWhVpo",
    authDomain: "catch-of-the-day-94e8a.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-94e8a.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
