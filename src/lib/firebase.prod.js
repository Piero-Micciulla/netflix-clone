import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// we need to somehow seed the database

// we need the config here

const config = {
  apiKey: "AIzaSyAT2HM2-wtmquntmpVsy0AZnchobN8LULI",
  authDomain: "netflix-clone-40c5b.firebaseapp.com",
  databaseURL: "https://netflix-clone-40c5b.firebaseio.com",
  projectId: "netflix-clone-40c5b",
  storageBucket: "netflix-clone-40c5b.appspot.com",
  messagingSenderId: "815866478974",
  appId: "1:815866478974:web:e91984674b75ef050c332f",
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export { firebase };
