import CardSecondary from "components/molecules/CardSecondary"
import OrderContext from "context/OrderContext"
import _ from "lodash"
import { useContext } from "react"
import { BasketItem } from "typescript/BasketItem"

interface BasketItemsProps {
  basket: BasketItem[]
}

export default function BasketItems({ basket }: BasketItemsProps) {
  const isBasketEmpty = _.isEmpty(basket)

  const { handleDeleteFromBasket } = useContext(OrderContext)

  return (
    <div className="products">
      {isBasketEmpty ? (
        <span className="empty-basket">Votre commande est vide pour le moment.</span>
      ) : (
        basket.map((basketItem) => (
          <CardSecondary
            key={basketItem.id}
            {...basketItem}
            onDelete={() => handleDeleteFromBasket(basketItem.id)}
          />
        ))
      )}
    </div>
  )
}
