import { BasketItem } from "typescript/BasketItem"

export const setBasketInLocalStorage = (username: string, basket: BasketItem[]) => {
  localStorage.setItem(username, JSON.stringify(basket))
  return
}

export const getBasketFromLocalStorage = (username: string) => {
  const existingBasket = localStorage.getItem(username)
  return existingBasket ? JSON.parse(existingBasket) : []
}
