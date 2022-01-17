import CasinoEffect from "components/atoms/CasinoEffect"
import Sticker from "components/atoms/Sticker"
import CardSecondary from "components/molecules/CardSecondary"
import OrderContext from "context/OrderContext"
import _ from "lodash"
import { useContext } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import styled from "styled-components"
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
    <TransitionGroup className="products">
      {basket.map((basketItem) => {
        const isAvailable = convertStringToBoolean(basketItem.isAvailable)
        const isAdvertised = convertStringToBoolean(basketItem.isAdvertised)
        return (
          <CSSTransition
            appear={true}
            key={basketItem.id}
            timeout={300}
            classNames="basket-animation"
          >
            <div className="basket-card">
              {isAdvertised && <Sticker className="badge-new" />}
              <CardSecondary
                key={basketItem.id}
                {...basketItem}
                price={isAvailable ? formatPrice(basketItem.price) : "Non disponible"}
                RightInfo={
                  <CasinoEffect
                    count={isAvailable ? `x ${basketItem.quantity}` : ""}
                    className="right-info"
                  />
                }
                onDelete={() => handleDeleteFromBasket(basketItem.id)}
              />
            </div>
          </CSSTransition>
        )
      })}
    </TransitionGroup>
  )
}

const BasketItemsStyled = styled.div``
