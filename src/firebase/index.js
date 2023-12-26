import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNHNHCCt4IA-OkbH6RtsueBqAxr4VtNv0",
  authDomain: "phukienminhtri-77e4d.firebaseapp.com",
  projectId: "phukienminhtri-77e4d",
  storageBucket: "phukienminhtri-77e4d.appspot.com",
  messagingSenderId: "812755922714",
  appId: "1:812755922714:web:d476f438b04fd7617746a3"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export { auth }