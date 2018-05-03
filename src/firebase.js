import * as firebase from 'firebase'
 
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCW-Gy7RYRsWgGORq1ja9XrdZu7MtNxctY",
  authDomain: "react-firebase-52fac.firebaseapp.com",
  databaseURL: "https://react-firebase-52fac.firebaseio.com",
  projectId: "react-firebase-52fac",
  storageBucket: "react-firebase-52fac.appspot.com",
  messagingSenderId: "489145592182"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);