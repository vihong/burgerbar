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
import { BasketItem } from "typescript/BasketItem"
import { MenuItem } from "typescript/MenuItem"

export default function Basket() {
  const { menuItems, basket } = useContext(OrderContext)
  console.log("basket: ", basket)
  const basketRefreshed = updateBasketWithFreshMenu(basket, menuItems)
  const basketWithMenuItems = createBasketItems(basketRefreshed, menuItems)

  const total = basketWithMenuItems.reduce((totalCommande: number, item: any) => {
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

const updateBasketWithFreshMenu = (basket: BasketItem[], freshMenu: MenuItem[]) => {
  console.log("basket: ", basket)
  console.log("freshMenu: ", freshMenu)
  const basketUpdatedWithFreshMenu = basket.filter((basketItem) => {
    const result = freshMenu.find((menuItem) => menuItem.id == basketItem.id)
    if (result === undefined) return false
    else return true
  })
  console.log("basketUpdatedWithFreshMenu: ", basketUpdatedWithFreshMenu)
  return basketUpdatedWithFreshMenu
}

const BasketStyled = styled.div`
  background: ${theme.colors.background_white};
  flex: 1;
  border-bottom-left-radius: ${theme.borderRadius.round};
  height: 80vh;
  box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 20%) inset;

  .header-votre-commande {
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    .title {
      font-size: ${theme.fonts.P2};
      text-align: center;
      font-family: "Amatic SC", cursive;
      font-weight: ${theme.weights.bold};
    }
  }

  .header-total {
    .total {
      font-size: ${theme.fonts.P4};
      font-family: "Amatic SC", cursive;
      font-weight: ${theme.weights.bold};
      letter-spacing: 2px;

      span:first-child {
        /* border: 1px solid red; */
        font-weight: ${theme.weights.light};
        font-family: "Amatic SC", cursive;
      }
    }
  }
`
