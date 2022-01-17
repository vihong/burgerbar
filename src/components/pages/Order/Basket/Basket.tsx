import OrderContext from "context/OrderContext"
import { useContext } from "react"
import styled from "styled-components/macro"
import { theme } from "theme"
import BasketItems from "./BasketItems"
import Header from "components/atoms/Header"
import Title from "./Title"
import Total from "./Total"
import { createBasketItems } from "./createBasketItems"
import { replaceFrenchCommaWithDot } from "utils/maths"
import { convertStringToBoolean } from "utils/string"
import _ from "lodash"
import EmptyBasket from "./EmptyBasket"

export default function Basket() {
  const { menuItems, basket } = useContext(OrderContext)

  const basketWithMenuItems = createBasketItems(basket, menuItems)

  const total = basketWithMenuItems.reduce((totalCommande, item) => {
    const isAvailable = convertStringToBoolean(item.isAvailable)
    if (isAvailable) totalCommande += replaceFrenchCommaWithDot(item.price) * item.quantity
    return totalCommande
  }, 0)

  const isBasketEmpty = _.isEmpty(basketWithMenuItems)

  return (
    <BasketStyled>
      <Header
        className="header-votre-commande"
        HeaderContent={<Title className="votre-commande" />}
      />
      <Header className="header-total" HeaderContent={<Total className="total" total={total} />} />
      {isBasketEmpty ? <EmptyBasket /> : <BasketItems basket={basketWithMenuItems} />}
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  background: ${theme.colors.background_white};
  flex: 1;

  .header-votre-commande {
    min-height: 50px;
    padding-top: 20px;
  }

  .header-total {
    .total {
      font-size: ${theme.fonts.P3};
    }
  }

  .products {
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
  }
`
