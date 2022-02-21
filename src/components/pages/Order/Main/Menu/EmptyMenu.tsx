import { resetMenuInFireStore } from "api/helpers"
import PrimaryButton from "components/atoms/PrimaryButton"
import OrderContext from "context/OrderContext"
import React, { useContext } from "react"
import styled from "styled-components/macro"
import { theme } from "theme"

export default function EmptyMenu() {
  const { name } = useContext(OrderContext)
  return (
    <EmptyMenuStyled>
      <h2>Plus de produit ?</h2>
      <h2>Cliquez ci-dessous pour en regénérer</h2>
      <PrimaryButton
        label={"Générer de nouveaux produits"}
        onClick={() => name && resetMenuInFireStore(name)}
      />
    </EmptyMenuStyled>
  )
}

const EmptyMenuStyled = styled.div`
  /* border: 1px solid red; */
  background-color: ${theme.colors.background_white};
  box-shadow: 0 8px 20px 8px rgb(0 0 0 / 20%) inset;
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  h2 {
    text-align: center;
    justify-content: center;
    align-items: center;
    align-self: center;
    line-height: 0.5;
    font-size: ${theme.fonts.P2};
    font-family: "Amatic SC", cursive;
    font-size: ${theme.fonts.P4};
    color: ${theme.colors.greyBlue};
  }

  button {
    margin-top: 30px;
  }
`
