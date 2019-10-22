import firebase from "firebase/app"
import database from "firebase/database"

const config = {
  apiKey: "AIzaSyB-ecJJZGWfNMawvnWkxYkg4MauPALoWu0",
  authDomain: "react-firebase-blog-501e6.firebaseapp.com",
  databaseURL: "https://react-firebase-blog-501e6.firebaseio.com",
  projectId: "react-firebase-blog-501e6",
  storageBucket: "react-firebase-blog-501e6.appspot.com",
  messagingSenderId: "768725903017",
  appId: "1:768725903017:web:1cdf80afaaf309c6f86bb8"
}

let firebaseCache

export const getFirebase = () => {
  if (firebaseCache) {
    return firebaseCache
  }

  firebase.initializeApp(config)
  firebaseCache = firebase
  return firebase
}
