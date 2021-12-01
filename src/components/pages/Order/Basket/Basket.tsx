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

export default function Basket() {
  const { menuItems, basket } = useContext(OrderContext)

  const basketWithMenuItems = createBasketItems(basket, menuItems)

  const total = basketWithMenuItems.reduce((totalCommande, item) => {
    totalCommande += replaceFrenchCommaWithDot(item.price) * item.quantity
    return totalCommande
  }, 0)

  return (
    <BasketStyled>
      <Header HeaderContent={<Title className="votre-commande" />} />
      <BasketItems basket={basketWithMenuItems} />
      <Header HeaderContent={<Total className="total" total={total} />} />
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

    .empty-basket {
      display: flex;
      /* border: 1px solid red; */
      padding: 10px;
      text-align: center;
      flex: 1;
      justify-content: center;
      align-items: center;
      align-self: center;
      line-height: 2;
      font-size: ${theme.fonts.P2};
    }
  }
`
