import { resetMenuInFireStore } from "api/helpers"
import PrimaryButton from "components/atoms/PrimaryButton"
import OrderContext from "context/OrderContext"
import React, { useContext } from "react"
import styled from "styled-components/macro"
import { theme } from "theme"

export default function EmptyMenu() {
  const { name, handleAdd } = useContext(OrderContext)
  return (
    <EmptyMenuStyled>
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
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
