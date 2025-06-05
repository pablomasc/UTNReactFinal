import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrJVx4sy0PhfWVHQCQ7li4g2HIrptInBU",
  authDomain: "utncursopablomasc.firebaseapp.com",
  projectId: "utncursopablomasc",
  storageBucket: "utncursopablomasc.firebasestorage.app",
  messagingSenderId: "814668428439",
  appId: "1:814668428439:web:1bafc01e1868e9cd4fe5d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore

const database = getFirestore(app);

export default database 