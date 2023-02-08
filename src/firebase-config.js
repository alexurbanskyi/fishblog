import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyCdW_dtvMk3oHGLiofitlQBUzINehKvw7k",
//   authDomain: "fish-blog-42786.firebaseapp.com",
//   projectId: "fish-blog-42786",
//   storageBucket: "fish-blog-42786.appspot.com",
//   messagingSenderId: "484157151454",
//   appId: "1:484157151454:web:104c1b1abce874b14c0a4f",
// };
const firebaseConfig = {
  apiKey: "AIzaSyCDuvquoIjXxjEqzCMQthLxsYVY0B33blw",
  authDomain: "myfish-blog.firebaseapp.com",
  projectId: "myfish-blog",
  storageBucket: "myfish-blog.appspot.com",
  messagingSenderId: "995092863339",
  appId: "1:995092863339:web:173042b81fcf1cb4e6d42e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

