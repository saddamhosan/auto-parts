import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  // apiKey:process.env.REACT_APP_apiKey,
  // authDomain:process.env.REACT_APP_authDomain,
  // projectId:process.env.REACT_APP_projectId,
  // storageBucket:process.env.REACT_APP_storageBucket,
  // messagingSenderId:process.env.REACT_APP_messagingSenderId,
  // appId:process.env.REACT_APP_appId,

  apiKey: "AIzaSyCSVpPWV9QouRyIALqRRvi76ireY-Zm4OM",
  authDomain: "automobile-d99a2.firebaseapp.com",
  projectId: "automobile-d99a2",
  storageBucket: "automobile-d99a2.appspot.com",
  messagingSenderId: "10277959594",
  appId: "1:10277959594:web:e68ed9810eef97cb201dd3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth

