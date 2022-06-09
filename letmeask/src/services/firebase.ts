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
  appId: "1:585268931247:web:bed622467d0660e309025a"
};


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export {firebase, auth, database}