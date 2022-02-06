import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyCguRlfYCl1zt5Pw7VveLPgp3WEdZZOnEc",
  authDomain: "burgerlive-firebase.firebaseapp.com",
  databaseURL: "https://burgerlive-firebase-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "burgerlive-firebase",
  storageBucket: "burgerlive-firebase.appspot.com",
  messagingSenderId: "278675976543",
  appId: "1:278675976543:web:2430919f0047dc5190c6ea",
  measurementId: "G-37Z986M1SV",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getDatabase(app)
export { db }
