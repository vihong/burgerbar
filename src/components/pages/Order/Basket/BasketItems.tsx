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
  const { handleDeleteFromBasket } = useContext(OrderContext)

  return (
    <TransitionGroup component={BasketItemsStyled}>
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

const BasketItemsStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(92vh - 100px - 50px - 20px);
  overflow-y: scroll;
  /* padding-top: 0.4em; */
  /* padding-bottom: 0.4em; */

  .basket-card {
    margin: 10px 1em;
    /* border: 1px solid blue; */

    :first-child {
      margin-top: 1em;
      /* border: 1px solid red; */
    }
    :last-child {
      margin-bottom: 1em;
    }

    .badge-new {
      position: absolute;
      z-index: 1;
      bottom: 10%;
      left: 21%;
      transform: translateY(-21%);
      transform: translateX(-5%);
    }
  }

  /* appear : useful for the first basket card to transition between "basket empty" and "basket not empty" but you have to add the "appear={true} props on JSX*/
  .basket-animation-appear {
    opacity: 0.01;
    transform: translate(120px, 0);
    &.basket-animation-appear-active {
      opacity: 1;
      transform: translate(0, 0);
      transition: all 300ms ease-out;
    }
  }

  /* enter */
  .basket-animation-enter {
    opacity: 0.01;
    transform: translate(120px, 0);
    &.basket-animation-enter-active {
      opacity: 1;
      transform: translate(0, 0);
      transition: all 300ms ease-out;
    }
  }

  /* exit */
  .basket-animation-exit {
    transform: translate(0, 0);
    &.basket-animation-exit-active {
      opacity: 0.01;
      transform: translate(-200px, 0);
      transition: all 300ms ease-out;
    }
  }
`
