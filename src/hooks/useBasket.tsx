import { setBasketInLocalStorage } from "api/localStorage"
import { useState } from "react"
import { ID } from "typescript/AtomicType"
import { BasketItem } from "typescript/BasketItem"
import { MenuItem } from "typescript/MenuItem"

export const useBasket = (basketInitialValues: BasketItem[], name: string | undefined) => {
  const [basket, setBasket] = useState<BasketItem[]>(basketInitialValues)

  const handleAddToBasket = (productInMenu: MenuItem) => {
    //1. Copy state before any potential work on it
    const basketCopy = [...basket]

    const indexOfProductInBasket = basketCopy.findIndex(
      (basketItem) => basketItem.id === productInMenu.id
    )

    const isProductAlreadyInBasket = indexOfProductInBasket !== -1

    if (!isProductAlreadyInBasket) {
      // create new basketItem
      const newBasketItem: BasketItem = {
        id: productInMenu.id,
        // title: productInMenu.title,
        // imageSource: productInMenu.imageSource,
        price: productInMenu.price,
        quantity: 1,
        isAvailable: "true",
        isAdvertised: "false",
      }
      // add new basketItem to basketCopy
      const updatedBasket = [newBasketItem, ...basketCopy]
      setBasket(updatedBasket)
      name && setBasketInLocalStorage(name, updatedBasket)
      // setState
    } else {
      basketCopy[indexOfProductInBasket].quantity += 1
      setBasket(basketCopy)
      name && setBasketInLocalStorage(name, basketCopy)
    }
  }

  const handleDeleteFromBasket = (idToDelete: ID) => {
    const basketCopy = [...basket]
    const basketCopyUpdated = basketCopy.filter((basketItem) => basketItem.id !== idToDelete)
    setBasket(basketCopyUpdated)
    name && setBasketInLocalStorage(name, basketCopyUpdated)
  }

  return { basket, setBasket, handleAddToBasket, handleDeleteFromBasket }
}
