import CardSecondary from "components/molecules/CardSecondary"
import OrderContext from "context/OrderContext"
import _ from "lodash"
import { useContext } from "react"
import styled from "styled-components/macro"
import { theme } from "theme"

export default function Basket() {
  const { menuItems } = useContext(OrderContext)

  const basket = _.filter(menuItems, (item) => item.quantity !== 0)
  const isBasketEmpty = _.isEmpty(basket)

  return (
    <BasketStyled>
      <Header />
      <div className="products">
        {isBasketEmpty ? (
          <span>Basket is Empty</span>
        ) : (
          basket.map((basketItem) => <CardSecondary key={basketItem.id} {...basketItem} />)
        )}
      </div>
    </BasketStyled>
  )
}

// TODO: move to atoms
function Header() {
  return (
    <div className="header">
      <span>Votre commande :</span>
      <span>Total</span>
    </div>
  )
}

const BasketStyled = styled.div`
  background: ${theme.colors.background_white};
  height: 92vh;
  overflow-y: scroll;
  .header {
    position: sticky;
    top: 0;

    min-height: 100px;
    background: ${theme.colors.white};
    color: white;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 1em;
    box-shadow: 0 0 8px 0 rgb(0 0 0 / 20%);

    > span {
      /* border: 1px solid blue; */
      color: ${theme.colors.black};

      :first-child {
        font-size: ${theme.fonts.P3};
        font-weight: ${theme.weights.bold};
      }
      :nth-child(2) {
        font-size: ${theme.fonts.P2};
        font-weight: ${theme.weights.medium};
      }
    }
  }

  .products {
    display: flex;
    flex: 1;
    flex-direction: column;
    /* border: 1px solid red; */
    > div {
      margin: 10px 1em;
    }
  }
`
