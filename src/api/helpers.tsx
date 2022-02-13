import { db } from "./firebase"
import { doc, getDoc, onSnapshot, setDoc } from "firebase/firestore"
import { fakeMenu2 } from "fakeData/fakeMenu"
import { useEffect } from "react"

export const createNewUser = async (name: string) => {
  await setDoc(doc(db, "users", name), {
    burgers: fakeMenu2,
  })
  console.log(`${name} was successfully created`)
}

export const getOneUserFromFirebase = async (name: string) => {
  const docRefToRetrieve = doc(db, "users", name)
  const docSnap = await getDoc(docRefToRetrieve)
  if (docSnap.exists()) {
    console.log("User found:", docSnap.id)
    console.log("Document data:", docSnap.data())
    const user = docSnap.data()
    return user
  } else {
    // doc.data() will be undefined in this case
    //console.log("name No such document!")
    console.log(`${name} couldn't be found`)
    return
  }

  // getDoc(docRefToRetrieve).then((doc) => {
  //   console.log(doc.data())
  // })
}

export const useUserListener = (userDocRef: any, setMenuItems: any) => {
  useEffect(() => {
    onSnapshot(userDocRef, (docSnap: any) => {
      const userFound = docSnap.data()
      console.log("user and burgers Found: ", userFound)
      setMenuItems(userFound?.burgers)
    })
  }, [])
}
