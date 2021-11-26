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

    const isInBasket = _.has(productAdded, "quantity")
    console.log("isInBasket: ", isInBasket)
    console.log("menuItems: ", menuItems)

    if (!isInBasket) {
      //1.copy of state
      const menuItemsCopy = [...menuItems]

      //2. manip
      // créer un nouveau produit avec une quantité incrémentée de 1
      const productIncrementedByone = {
        ...productAdded,
        quantity: 1,
      }

      // trouver l'index de l'élément dans l'array qu'il faut updater
      const indexOfMenuItemToUpdate = menuItemsCopy.findIndex(
        (item) => item.id === productIncrementedByone.id
      )

      console.log("productIncrementedByone: ", productIncrementedByone)
      menuItemsCopy[indexOfMenuItemToUpdate] = productIncrementedByone

      console.log("menuItemsCopy après update: ", menuItemsCopy)
      setMenuItems(menuItemsCopy)
      //3. setState
    } else {
    }
  }
  return { menuItems, handleAdd, handleEdit, handleDelete, handleIncrementQuantity }
}
