import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDs2gNA_gnybSwVTeSaflB1mSOBhaMlPXM",
  authDomain: "rd-gb-react.firebaseapp.com",
  databaseURL: "https://rd-gb-react-default-rtdb.firebaseio.com",
  projectId: "rd-gb-react",
  storageBucket: "rd-gb-react.appspot.com",
  messagingSenderId: "26897496428",
  appId: "1:26897496428:web:98bd94af40207cf8bbdb49"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
export const auth = firebase.auth();