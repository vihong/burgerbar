import { db } from "./firebase"
import { doc, getDoc, onSnapshot, setDoc } from "firebase/firestore"
import { fakeMenu2 } from "fakeData/fakeMenu"
import { useEffect } from "react"
import { getBasketFromLocalStorage, setBasketInLocalStorage } from "./localStorage"
import { updateBasketWithFreshMenu } from "components/pages/Order/Main/Basket/createBasketItems"

export const createNewUser = async (name: string) => {
  await setDoc(doc(db, "users", name), {
    burgers: fakeMenu2,
  })
  console.log(`${name} was successfully created`)
}

export const resetMenuInFireStore = async (name: string) => {
  await setDoc(doc(db, "users", name), {
    burgers: fakeMenu2,
  })
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
    console.log(`${name} couldn't be found`)
    return
  }
}

export const useUserListener = (
  userDocRef: any,
  setMenuItems: any,
  setBasket: any,
  name: string | undefined
) => {
  // console.log("basket: ", basket) // here, basket has the same value as in the state.
  useEffect(() => {
    // 1. here I retrieve the latest update of menuItems or "burgers"
    onSnapshot(userDocRef, (docSnap: any) => {
      const userFound = docSnap.data()
      const username = docSnap.id
      // console.log("basket: ", basket) // here basket will ALWAYS be null cause out of scope of the websocket

      // 2. here I update menu locally
      if (!userFound) name && createNewUser(name) // not very 'safe and secure' but great for demo purposes.
      const freshMenu = userFound?.burgers
      setMenuItems(freshMenu)
      const oldBasket = getBasketFromLocalStorage(username)
      const newBasket = updateBasketWithFreshMenu(oldBasket, freshMenu)

      // 3. here I update menu baset locally and in localStorage
      setBasket(newBasket)
      setBasketInLocalStorage(username, newBasket)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export const syncBothMenus = async (name: any, menuItems: any) => {
  //@TODO: change to update
  await setDoc(doc(db, "users", name), {
    burgers: menuItems,
  })
  console.log(`${name} was successfully updated`)
}
