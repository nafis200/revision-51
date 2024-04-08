
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAiQs1dsdnMavOFrmNC9812BlXB81aeYps",
  authDomain: "revsion-51.firebaseapp.com",
  projectId: "revsion-51",
  storageBucket: "revsion-51.appspot.com",
  messagingSenderId: "260375241847",
  appId: "1:260375241847:web:9e0b99b0c477af256f1272"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth

