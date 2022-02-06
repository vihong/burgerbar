import { db } from "./initFirebase"
import { ref, set } from "firebase/database"

/** Analogy with a squirrel digging a hole. This has three logical parts to it:
 * 1) db
 * 2) the location / path created in that db : je veux creuser un trou/chemin
 * 3) the info we want to create at that location / path : à ce trou à, je veux ranger cette info.
 *
 */

export const createUser = async (id: number, name: string) => {
  const response = await set(ref(db, `${id}/burgers`), {
    id: id,
    name: name,
  })
  if (response === null) alert("error")
}

// // pour write data
// export const writeUserData = async ({ name, age, id }) => {
//   const response = await set(ref(db, "users/" + id), {
//     id: id,
//     name: name,
//     age: age,
//   })
//   if (response === null) alert("error")
// }

// pour read data
// export const useGetUsersInRealtime = (users, setUsers) => {
//   //const dbRef = ref(db);
//   //get(child(dbRef, "users" + userId));
// }
