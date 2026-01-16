import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// ⚠️ Node NO usa import.meta.env (salvo configuración extra)
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "vinum-store.firebaseapp.com",
  projectId: "vinum-store",
  storageBucket: "vinum-store.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
