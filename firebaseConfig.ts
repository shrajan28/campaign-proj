// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkqLiTTxuSiNWSwU-bo6XFWXuy883qTUA",
  authDomain: "campaign-project-4334f.firebaseapp.com",
  projectId: "campaign-project-4334f",
  storageBucket: "campaign-project-4334f.appspot.com",
  messagingSenderId: "365741874190",
  appId: "1:365741874190:web:509c4a05ef73959129705f",
  measurementId: "G-2EENY8YG3N",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
