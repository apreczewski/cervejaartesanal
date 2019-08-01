import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCO5Jn5OAFiSOcU1InEXh_4C7CZ16J8-kg",
  authDomain: "cervejaartesanal-19c00.firebaseapp.com",
  databaseURL: "https://cervejaartesanal-19c00.firebaseio.com",
  projectId: "cervejaartesanal-19c00",
  storageBucket: "",
  messagingSenderId: "1770581017",
  appId: "1:1770581017:web:5efbaaf7457bc570"
};

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth