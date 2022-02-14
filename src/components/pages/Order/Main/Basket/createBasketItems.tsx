import { BasketItem } from "typescript/BasketItem"
import { MenuItem } from "typescript/MenuItem"

export function createBasketItems(basket: BasketItem[], menuItems: MenuItem[]) {
  // à ce stade là, basket n'est jamais complet, il n'a pas d'image
  console.log("basket: ", basket)
  console.log("menuItems: ", menuItems)

  //1. d'abord j'update basket en ne gardant que des produits existe vraiment dans la dernière version du menu : freshMenu.
  //const basketRefreshed = updateBasketWithFreshMenu(basket, menuItems)

  //2. ensuite, je peux me mettre à continuer de construire les éléments de basket en toute sérénité (+ j'oublie pas de setBasket soit dit en passant)
  const basketFinal = basket.map((basketItem) => {
    let basketItemFinal: BasketItem = {
      id: undefined,
      price: 0,
      quantity: 0,
      isAvailable: "true",
      isAdvertised: "false",
    }
    const menuItemInBasket = menuItems.find((menuItem) => menuItem.id === basketItem.id)

    basketItemFinal = {
      ...menuItemInBasket,
      price: menuItemInBasket?.price || 0,
      quantity: basketItem.quantity,
      isAvailable: menuItemInBasket?.isAvailable || "",
      isAdvertised: menuItemInBasket?.isAdvertised || "",
    }
    return basketItemFinal
  })
  return basketFinal
}

const isInsideMenu = (basketItem: BasketItem, freshMenu: MenuItem[]): boolean => {
  return false
}
