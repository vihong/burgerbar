import { useState } from "react"
import { ID } from "typescript/AtomicType"
import { BasketItem } from "typescript/BasketItem"
import { MenuItem } from "typescript/MenuItem"

export const useBasket = (basketInitialValues: BasketItem[]) => {
  const [basket, setBasket] = useState<BasketItem[]>(basketInitialValues)

  const handleAddToBasket = (productAdded: MenuItem) => {
    //1. Copy state before any potential work on it
    const basketCopy = [...basket]

    const indexOfExistingProductInBasket = basketCopy.findIndex(
      (basketItem) => basketItem.id === productAdded.id
    )

    const isInBasket = indexOfExistingProductInBasket !== -1 ? true : false

    if (!isInBasket) {
      // create new basketItem
      const newBasketItem: BasketItem = {
        id: productAdded.id,
        // title: productAdded.title,
        // imageSource: productAdded.imageSource,
        price: productAdded.price,
        quantity: 1,
      }
      // add new basketItem to basketCopy
      setBasket([...basketCopy, newBasketItem])
      // setState
    } else {
      basketCopy[indexOfExistingProductInBasket].quantity += 1
      setBasket(basketCopy)
    }
  }

  const handleDeleteFromBasket = (idToDelete: ID) => {
    const basketCopy = [...basket]
    const basketCopyUpdated = basketCopy.filter((basketItem) => basketItem.id !== idToDelete)
    setBasket(basketCopyUpdated)
  }

  return { basket, handleAddToBasket, handleDeleteFromBasket }
}
