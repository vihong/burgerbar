import { BasketItem } from "typescript/BasketItem"
import { MenuItem } from "typescript/MenuItem"

export function createBasketItems(basket: BasketItem[], menuItems: MenuItem[] | undefined) {
  const basketFinal = basket.map((basketItem) => {
    let basketItemFinal: BasketItem = {
      id: undefined,
      quantity: 0,
    }
    const menuItemInBasket = menuItems?.find((menuItem) => menuItem.id === basketItem.id)

    basketItemFinal = {
      ...menuItemInBasket,
      quantity: basketItem.quantity,
    }
    return basketItemFinal
  })
  return basketFinal
}
