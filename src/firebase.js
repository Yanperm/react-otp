import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyDYwelHcOWIP6lD7A-SHQwZtddCC1_G_Yo",
  authDomain: "softubonlimitedpartnership.firebaseapp.com",
  projectId: "softubonlimitedpartnership",
  storageBucket: "softubonlimitedpartnership.appspot.com",
  messagingSenderId: "805342429419",
  appId: "1:805342429419:web:b151f6af8b5f0319797eae"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase
