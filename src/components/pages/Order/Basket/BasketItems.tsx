import CardSecondary from "components/molecules/CardSecondary"
import _ from "lodash"
import { BasketItem } from "typescript/BasketItem"

interface BasketItemsProps {
  basket: BasketItem[]
}

export default function BasketItems({ basket }: BasketItemsProps) {
  const isBasketEmpty = _.isEmpty(basket)

  return (
    <div className="products">
      {isBasketEmpty ? (
        <span>Basket is Empty</span>
      ) : (
        basket.map((basketItem) => <CardSecondary key={basketItem.id} {...basketItem} />)
      )}
    </div>
  )
}
