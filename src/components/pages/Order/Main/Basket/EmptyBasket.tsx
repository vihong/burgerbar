import React from "react"
import styled from "styled-components"
import { theme } from "theme"

export default function EmptyBasket() {
  return <EmptyBasketStyled>Remplissez votre commande avec des produits du menu.</EmptyBasketStyled>
}

const EmptyBasketStyled = styled.span`
  display: flex;
  padding: 10px;
  text-align: center;
  flex: 1;
  justify-content: center;
  align-items: center;
  align-self: center;
  line-height: 2;
  font-size: ${theme.fonts.P2};
`
