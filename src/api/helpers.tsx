import { db } from "./initFirebase"
import { ref, set } from "firebase/database"

export const createUser = async (id: number, name: string) => {
  const response = await set(ref(db, "users/" + id), {
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
