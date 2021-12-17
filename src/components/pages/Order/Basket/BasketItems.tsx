import CardSecondary from "components/molecules/CardSecondary"
import OrderContext from "context/OrderContext"
import _ from "lodash"
import { useContext } from "react"
import { BasketItem } from "typescript/BasketItem"
import { formatPrice } from "utils/maths"
import { convertStringToBoolean } from "utils/string"

interface BasketItemsProps {
  basket: BasketItem[]
}

export default function BasketItems({ basket }: BasketItemsProps) {
  const isBasketEmpty = _.isEmpty(basket)

  const { handleDeleteFromBasket } = useContext(OrderContext)

  return (
    <div className="products">
      {isBasketEmpty ? (
        <span className="empty-basket">Votre commande est vide.</span>
      ) : (
        basket.map((basketItem) => {
          const isAvailable = convertStringToBoolean(basketItem.isAvailable)
          return (
            <CardSecondary
              key={basketItem.id}
              {...basketItem}
              price={isAvailable ? formatPrice(basketItem.price) : "Non disponible"}
              rightinfo={isAvailable ? `x ${basketItem.quantity}` : ""}
              onDelete={() => handleDeleteFromBasket(basketItem.id)}
            />
          )
        })
      )}
    </div>
  )
}
