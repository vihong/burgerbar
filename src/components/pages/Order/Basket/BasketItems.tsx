import CardSecondary from "components/molecules/CardSecondary"
import _ from "lodash"
import React from "react"
import { BasketItem } from "typescript/BasketItem"
import { MenuItem } from "typescript/MenuItem"

interface BasketItemsProps {
  basket: BasketItem[]
  menuItems?: MenuItem[]
}

export default function BasketItems({ basket, menuItems }: BasketItemsProps) {
  const isBasketEmpty = _.isEmpty(basket)

  return (
    <div className="products">
      {isBasketEmpty ? (
        <span>Basket is Empty</span>
      ) : (
        basket.map((basketItem) => {
          const burgerFromMenuToDisplayInBasket = menuItems?.find(
            (burger) => burger.id === basketItem.id
          )
          return (
            <CardSecondary
              key={basketItem.id}
              {...burgerFromMenuToDisplayInBasket}
              // {...basketItem}
              quantity={basketItem.quantity}
            />
          )
        })
      )}
    </div>
  )
}
