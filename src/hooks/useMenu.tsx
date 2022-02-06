import { setMenuInFirebaseDB } from "api/helpers"
import { useState } from "react"
import { MenuItem } from "typescript/MenuItem"

export const useMenu = (username: string | undefined, menuInitialValues: MenuItem[]) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(menuInitialValues)

  const handleAdd = (itemCreated: MenuItem) => {
    if (!menuItems) {
      setMenuInFirebaseDB(username, [itemCreated])
      setMenuItems([itemCreated])
      return
    }
    const menuItemsCopy = [...menuItems]
    menuItemsCopy.unshift(itemCreated)
    setMenuItems(menuItemsCopy)
    setMenuInFirebaseDB(username, menuItemsCopy)
  }

  const handleDelete = (idToDelete: number | undefined): void => {
    const menuItemsCopy = [...menuItems]
    const menuItemsUpdated = menuItemsCopy.filter((menuItem) => menuItem.id !== idToDelete)
    setMenuItems(menuItemsUpdated)
    setMenuInFirebaseDB(username, menuItemsUpdated)
  }

  const handleEdit = (itemUpdated: MenuItem): void => {
    const menuItemsCopy = [...menuItems]
    const idOfItemUpdated: any = menuItems.findIndex((item) => item.id === itemUpdated.id)
    menuItemsCopy[idOfItemUpdated] = itemUpdated
    setMenuItems(menuItemsCopy)
    setMenuInFirebaseDB(username, menuItemsCopy)
  }

  const handleIncrementQuantity = (productAdded: MenuItem) => {
    //1.copy of state
    const menuItemsCopy = [...menuItems]

    //2. manip en 3 étapes a b et c
    //a. find index in Menu
    const indexInMenu = menuItemsCopy.findIndex((item) => item.id === productAdded.id)
    //b. create newProduct with quantity incremented by 1
    const productInMenuIncrementedByone = {
      ...productAdded,
      quantity: productAdded?.quantity + 1 || 1,
    }
    //c. replace element in Menu at index with newProduct
    menuItemsCopy[indexInMenu] = productInMenuIncrementedByone

    //3. setState
    setMenuItems(menuItemsCopy)
  }

  return { menuItems, setMenuItems, handleAdd, handleEdit, handleDelete, handleIncrementQuantity }
}
