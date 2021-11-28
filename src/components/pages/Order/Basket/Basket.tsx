import OrderContext from "context/OrderContext"
import _ from "lodash"
import { useContext } from "react"
import styled from "styled-components/macro"
import { theme } from "theme"
import BasketItems from "./BasketItems"
import Header from "components/atoms/Header"
import Title from "./Title"
import Total from "./Total"
import { createBasketItems } from "./createBasketItems"

export default function Basket() {
  const { menuItems, basket } = useContext(OrderContext)

  const basketWithMenuItems = createBasketItems(basket, menuItems)

  console.log("basketWithMenuItems: ", basketWithMenuItems)
  const total = basketWithMenuItems.reduce((totalCommande, item) => {
    console.log("item: ", item)
    totalCommande += item.price * item.quantity
    return totalCommande
  }, 0)

  console.log("total: ", total)

  return (
    <BasketStyled>
      <Header HeaderContent={<Title className="votre-commande" />} />
      <BasketItems basket={basketWithMenuItems} />
      <Header HeaderContent={<Total className="total" />} />
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  background: ${theme.colors.background_white};
  flex: 1;

  .products {
    display: flex;
    flex-direction: column;
    height: calc(92vh - 200px);
    overflow-y: scroll;
    > div {
      margin: 10px 1em;
      :first-child {
        margin-top: 1em;
      }
      :last-child {
        margin-bottom: 1em;
      }
    }
  }
`
