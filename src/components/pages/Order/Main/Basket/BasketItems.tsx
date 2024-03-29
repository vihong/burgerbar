import CasinoEffect from "components/atoms/CasinoEffect"
import Sticker from "components/atoms/Sticker"
import CardSecondary from "components/molecules/CardSecondary"
import OrderContext from "context/OrderContext"
import { useContext } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import styled from "styled-components"
import { BasketItem } from "typescript/BasketItem"
import { checkIsBeingSelected } from "utils/businessLogic"
import { formatPrice } from "utils/maths"
import { convertStringToBoolean } from "utils/string"

interface BasketItemsProps {
  basket: BasketItem[]
}

export default function BasketItems({ basket }: BasketItemsProps) {
  const {
    handleDeleteFromBasket,
    menuItems,
    isModeAdmin,
    setItemBeingSelected,
    setIsCollapsed,
    setIsAddFormVisible,
    setIsEditFormVisible,
    titleEditBoxRef,
    itemBeingSelected,
  } = useContext(OrderContext)

  // @TODO: Refactor this with Menu.tsx
  const handleCardSelected = async (idSelected: number | undefined) => {
    if (!isModeAdmin) return
    const itemBeingSelected = menuItems?.find((item) => item.id === idSelected)
    //@ts-ignore
    setItemBeingSelected(itemBeingSelected)
    await setIsCollapsed(false)
    await setIsAddFormVisible(false)
    await setIsEditFormVisible(true)
    titleEditBoxRef.current.focus()
  }

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
                onCardClick={() => handleCardSelected(basketItem.id)}
                key={basketItem.id}
                {...basketItem}
                isBeingSelected={isModeAdmin && checkIsBeingSelected(itemBeingSelected, basketItem)}
                LeftInfo={
                  <CasinoEffect
                    count={isAvailable ? formatPrice(basketItem.price) : "Non disponible"}
                    className="price"
                  />
                }
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
  height: calc(85vh - 70px - 50px - 20px);
  overflow-y: scroll;
  /* padding-top: 0.4em; */
  /* padding-bottom: 0.4em; */

  .basket-card {
    /* useful for badge NEW */
    position: relative;
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
