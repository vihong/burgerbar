import OrderContext from "context/OrderContext"
import _ from "lodash"
import { useContext } from "react"
import styled from "styled-components/macro"
import { theme } from "theme"
import BasketItems from "./BasketItems"
import Header from "./Header"

export default function Basket() {
  const { menuItems, basket } = useContext(OrderContext)

  return (
    <BasketStyled>
      <div className="header">
        <span className="votre-commande">Votre commande</span>
      </div>

      <BasketItems basket={basket} menuItems={menuItems} />
      <Header />
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
