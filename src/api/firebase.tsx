import { initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore"

/** key words ici :
 * - base de donnée / database / db / store
 * - créer base de donnée FireStore online sur interface Firebase
 * - connecter base de donnée online avec le projet frontend en local
 */

const myFirebaseConfig = {
  apiKey: "AIzaSyCguRlfYCl1zt5Pw7VveLPgp3WEdZZOnEc", // à ranger dans un .env file sinon tout le monde a accès à la base de donnée et la modifier comme bon leur semble
  authDomain: "burgerlive-firebase.firebaseapp.com",
  projectId: "burgerlive-firebase",
  storageBucket: "burgerlive-firebase.appspot.com",
  messagingSenderId: "278675976543",
  appId: "1:278675976543:web:2430919f0047dc5190c6ea",
  measurementId: "G-37Z986M1SV",
}

initializeApp(myFirebaseConfig)
const db = getFirestore()

/** For module size optimisation reasons, no need to reuse app to create db :
 * const app = initializeApp(myFirebaseConfig);
 * const db = getFirestore(app);
 *
 * The following two are enough in v9 :
 * initializeApp(myFirebaseConfig);
 * const db = getFirestore();
 */

export { db } // <--- l'objectif final: obtenir la référence à ma db Firestore accessible via mon appli frontend
