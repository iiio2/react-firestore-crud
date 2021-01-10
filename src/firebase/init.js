import firebase from "firebase/app"; 
import "firebase/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyAIkdIVCibRV8729J0eXpgaRZ2qUeYXSPA",
    authDomain: "dojo-blog-6cad3.firebaseapp.com",
    projectId: "dojo-blog-6cad3",
    storageBucket: "dojo-blog-6cad3.appspot.com",
    messagingSenderId: "536400520490",
    appId: "1:536400520490:web:b7ee6bb5cf0f3c19366a53"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export const db  = firebaseApp.firestore(); 

