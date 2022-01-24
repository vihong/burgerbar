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
      <Header className="header-total" HeaderContent={<Total className="total" total={total} />} />
      {isBasketEmpty ? <EmptyBasket /> : <BasketItems basket={basketWithMenuItems} />}
      <Header className="header-votre-commande" HeaderContent={<Title className="title" />} />
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  background: ${theme.colors.background_white};
  flex: 1;

  .header-votre-commande {
    min-height: 50px;
    padding: 10px 0;
    .title {
      font-size: ${theme.fonts.P0};
      text-align: center;
    }
  }

  .header-total {
    .total {
      font-size: ${theme.fonts.P3};
    }
  }
`
