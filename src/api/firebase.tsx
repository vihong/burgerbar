import { initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore"

/** key words ici :
 * - base de donnée / database / db / store
 * - créer base de donnée FireStore online sur interface Firebase
 * - connecter base de donnée online avec le projet frontend en local
 */

const myFirebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
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
