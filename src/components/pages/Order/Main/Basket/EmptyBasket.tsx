import React from "react"
import styled from "styled-components"
import { theme } from "theme"

export default function EmptyBasket() {
  return <EmptyBasketStyled>Ajoutez des produits.</EmptyBasketStyled>
}

const EmptyBasketStyled = styled.span`
  display: flex;
  height: calc(85vh - 70px - 70px);
  /* padding: 10px; */
  text-align: center;
  flex: 1;
  justify-content: center;
  align-items: center;
  align-self: center;
  line-height: 2;
  font-size: ${theme.fonts.P2};
`
