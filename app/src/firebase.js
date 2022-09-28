// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHOUDA_awEApPE7Yg-J4Wv8g7qtwvQjuI",
  authDomain: "chat-app-react-46ed4.firebaseapp.com",
  projectId: "chat-app-react-46ed4",
  storageBucket: "chat-app-react-46ed4.appspot.com",
  messagingSenderId: "173671132803",
  appId: "1:173671132803:web:c15bebb2486ba835ecb5b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);