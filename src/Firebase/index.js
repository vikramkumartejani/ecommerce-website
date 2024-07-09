import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC_qowOXyEy9sNfCAjGa83CXpQLzLQNchM",
  authDomain: "e-shop-59e51.firebaseapp.com",
  projectId: "e-shop-59e51",
  storageBucket: "e-shop-59e51.appspot.com",
  messagingSenderId: "478804904289",
  appId: "1:478804904289:web:49f40cb69bf2a5d7039d20",
  measurementId: "G-14Q4VEYZL6",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
