import { BasketItem } from "typescript/BasketItem"
import { MenuItem } from "typescript/MenuItem"

export function createBasketItems(basket: BasketItem[], menuItems: MenuItem[]) {
  const basketFinal = basket.map((basketItem) => {
    let basketItemFinal: BasketItem = {
      id: undefined,
      price: 0,
      quantity: 0,
      isAvailable: "true",
    }
    const menuItemInBasket = menuItems.find((menuItem) => menuItem.id === basketItem.id)

    basketItemFinal = {
      ...menuItemInBasket,
      price: menuItemInBasket?.price || 0,
      quantity: basketItem.quantity,
      isAvailable: menuItemInBasket?.isAvailable || "",
    }
    return basketItemFinal
  })
  return basketFinal
}
