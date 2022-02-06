import { db } from "./initFirebase"
import { child, get, getDatabase, ref, set } from "firebase/database"
import { MenuItem } from "typescript/MenuItem"

/** Analogy with a squirrel digging a hole. This has three logical parts to it:
 * 1) db
 * 2) the location / path created in that db : je veux creuser un trou/chemin
 * 3) the info we want to create at that location / path : à ce trou à, je veux ranger cette info.
 *
 */

export const createUser = async (username: string, id: number) => {
  const response = await set(ref(db, `/${username}/userInfo`), {
    id: id,
    username: username,
  })
  if (response === null) alert("error")
}

export const createMenu = async (username: string, menu: MenuItem[]) => {
  const response = await set(ref(db, `${username}/burgers`), [...menu])
  if (response === null) alert("error")
}

export const getUserAccount = (username: string, id: number, menu: MenuItem[]) => {
  const dbRef = ref(getDatabase())
  get(child(dbRef, `${username}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val())
      } else {
        console.log("No data available")
        createUser(username, id)
        createMenu(username, menu)
      }
    })
    .catch((error) => {
      console.error(error)
      alert("error")
    })
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
