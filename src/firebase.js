import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBf-Ludry_ErYG6okJNDUKaMN37oWvuiCk",
    authDomain: "idobatakaigi-with-yoko.firebaseapp.com",
    projectId: "idobatakaigi-with-yoko",
    storageBucket: "idobatakaigi-with-yoko.appspot.com",
    messagingSenderId: "941317296283",
    appId: "1:941317296283:web:ccd58f232de1694884363e"
};
firebase.initializeApp(firebaseConfig)
const database = firebase.database();
const messageRef = database.ref('messages');

export const pushMessage = ({name, text}) => {
  messageRef.push({ name, text, });
}
