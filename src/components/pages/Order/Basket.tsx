import React from "react"
import styled from "styled-components/macro"

export default function Basket() {
  return (
    <BasketStyled>
      <h1>Votre commande :</h1>
      <h2>Total</h2>
      <ul className="products-added">
        <li>product 1</li>
        <li>product 2</li>
      </ul>
      {/* <button>Payer</button> */}
      {/* <button>Payer</button> */}
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  background: lightgreen;
`
