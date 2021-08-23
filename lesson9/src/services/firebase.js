import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC1xC8Bpj4pd1oxBCT4Af5MwKIFKYVeRR4",
  authDomain: "gb-react-db271.firebaseapp.com",
  databaseURL: "https://gb-react-db271-default-rtdb.firebaseio.com",
  projectId: "gb-react-db271",
  storageBucket: "gb-react-db271.appspot.com",
  messagingSenderId: "820193795236",
  appId: "1:820193795236:web:3656b1cbf3b4e329f95a31"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
export const auth = firebase.auth();