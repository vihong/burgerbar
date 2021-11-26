import _ from "lodash"
import { useState } from "react"
import { MenuItem } from "typescript/MenuItem"

export const useMenu = (menuInitialValues: MenuItem[]) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(menuInitialValues)

  const handleAdd = (itemCreated: MenuItem) => {
    const menuItemsCopy = [...menuItems]

    menuItemsCopy.unshift(itemCreated)
    setMenuItems(menuItemsCopy)
  }

  const handleDelete = (idToDelete: number | undefined): void => {
    const menuItemsCopy = [...menuItems]
    const menuItemsUpdated = menuItemsCopy.filter((menuItem) => menuItem.id !== idToDelete)
    setMenuItems(menuItemsUpdated)
  }

  const handleEdit = (itemUpdated: MenuItem): void => {
    const menuItemsCopy = [...menuItems]
    const idOfItemUpdated: any = menuItems.findIndex((item) => item.id === itemUpdated.id)
    menuItemsCopy[idOfItemUpdated] = itemUpdated
    setMenuItems(menuItemsCopy)
  }

  const handleIncrementQuantity = (productAdded: MenuItem) => {
    console.log("productAdded: ", productAdded)
    console.log("menuItems: ", menuItems)

    //1.copy of state
    const menuItemsCopy = [...menuItems]

    // trouver l'index de l'élément dans l'array pour le modifier dans la copy du state
    const indexInMenuToUpdate = menuItemsCopy.findIndex((item) => item.id === productAdded.id)

    //2. manip
    // créer un nouveau produit avec une quantité incrémentée de 1

    const isInBasket = _.has(productAdded, "quantity")
    console.log("isInBasket: ", isInBasket)
    if (!isInBasket) {
      const productIncrementedByone = {
        ...productAdded,
        quantity: 1,
      }

      console.log("productIncrementedByone: ", productIncrementedByone)
      menuItemsCopy[indexInMenuToUpdate] = productIncrementedByone

      console.log("menuItemsCopy après update: ", menuItemsCopy)
      setMenuItems(menuItemsCopy)
    } else {
      const productIncrementedByone = {
        ...productAdded,
        quantity: productAdded?.quantity + 1,
      }
      menuItemsCopy[indexInMenuToUpdate] = productIncrementedByone
      setMenuItems(menuItemsCopy)
    }
  }
  return { menuItems, handleAdd, handleEdit, handleDelete, handleIncrementQuantity }
}
