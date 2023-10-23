import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyA-ESqcRNWtffJTHQeg1NQnDDkuJJFcm8I",
    authDomain: "bicycle-app-f5099.firebaseapp.com",
    projectId: "bicycle-app-f5099",
    storageBucket: "bicycle-app-f5099.appspot.com",
    messagingSenderId: "683256308931",
    appId: "1:683256308931:web:ff0ab1bd0044582cafae76"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
