import CardSecondary from "components/molecules/CardSecondary"
import OrderContext from "context/OrderContext"
import _ from "lodash"
import { useContext } from "react"
import styled from "styled-components/macro"
import { theme } from "theme"

export default function Basket() {
  const { menuItems, basket } = useContext(OrderContext)

  const isBasketEmpty = _.isEmpty(basket)

  return (
    <BasketStyled>
      <div className="header">
        <span className="votre-commande">Votre commande</span>
      </div>

      <div className="products">
        {isBasketEmpty ? (
          <span>Basket is Empty</span>
        ) : (
          basket.map((basketItem) => {
            const burgerFromMenuToDisplayInBasket = menuItems?.find(
              (burger) => burger.id === basketItem.id
            )
            return (
              <CardSecondary
                key={basketItem.id}
                {...burgerFromMenuToDisplayInBasket}
                // {...basketItem}
                quantity={basketItem.quantity}
              />
            )
          })
        )}
      </div>
      <Header />
    </BasketStyled>
  )
}

// TODO: move to atoms
function Header() {
  return (
    <div className="header">
      {/* <span className="votre-commande">Votre commande</span> */}
      <div className="total">
        <span>Total : </span>
        <span>10.80€</span>
      </div>
    </div>
  )
}

const BasketStyled = styled.div`
  background: ${theme.colors.background_white};
  flex: 1;

  .header {
    position: sticky;
    top: 0;

    min-height: 100px;
    background: ${theme.colors.background_black};

    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1em;
    box-shadow: 0 0 8px 0 rgb(0 0 0 / 20%);
    color: ${theme.colors.white};
    line-height: 1.5;

    .votre-commande {
      /* border: 1px solid blue; */
      font-size: ${theme.fonts.P3};
      font-weight: ${theme.weights.bold};
      /* border: 1px solid red; */
    }

    .total {
      display: flex;
      justify-content: space-between;
      /* border: 1px solid red; */
      width: 100%;
      font-size: ${theme.fonts.P2};
      font-weight: ${theme.weights.medium};
      color: ${theme.colors.primary};
      > span:last-child {
        font-weight: ${theme.weights.regular};
      }
    }
  }

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
