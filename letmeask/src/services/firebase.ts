import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: "AIzaSyA9uHcZL3fuJ2eYiUg7MDz6MqHXWWcIbGc",
  authDomain: "letmeask-3a531.firebaseapp.com",
  databaseURL: "https://letmeask-3a531-default-rtdb.firebaseio.com",
  projectId: "letmeask-3a531",
  storageBucket: "letmeask-3a531.appspot.com",
  messagingSenderId: "585268931247",
  appId: "1:585268931247:web:10ef33e13f9c1e7f09025a"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export {firebase, auth, database}