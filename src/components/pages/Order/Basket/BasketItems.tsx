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
        <span className="empty-basket">Votre commande est vide pour le moment.</span>
      ) : (
        basket.map((basketItem) => <CardSecondary key={basketItem.id} {...basketItem} />)
      )}
    </div>
  )
}
