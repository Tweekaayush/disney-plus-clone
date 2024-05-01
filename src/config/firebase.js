import {initializeApp} from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import {getStorage} from 'firebase/storage'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_API_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };
  
  const firebaseApp = initializeApp(firebaseConfig)
  const db = getFirestore(firebaseApp)
  const auth = getAuth(firebaseApp)
  const provider = new GoogleAuthProvider()
  const storage = getStorage(firebaseApp)

  export {auth, provider, storage, signInWithPopup, onAuthStateChanged, signOut}
  export default db
