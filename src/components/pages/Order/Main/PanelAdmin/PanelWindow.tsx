import OrderContext from "context/OrderContext"
import React, { useContext } from "react"
import styled from "styled-components"
import { theme } from "theme"
import EditForm from "components/organisms/EditForm"
import AddForm from "components/organisms/AddForm"
import { EMPTY_PRODUCT } from "components/pages/Order/Order"
import HintMessage from "./HintMessage"

export default function PanelWindow() {
  const { isAddFormVisible, isEditFormVisible, itemBeingSelected } = useContext(OrderContext)

  return (
    <PanelWindowStyled>
      {isAddFormVisible && <AddForm buttonLabel="Ajouter un nouveau produit au menu" />}
      {isEditFormVisible && (itemBeingSelected === EMPTY_PRODUCT ? <HintMessage /> : <EditForm />)}
    </PanelWindowStyled>
  )
}

const PanelWindowStyled = styled.div`
  /* border-top: 1px solid ${theme.colors.primary}; */
  background-color: ${theme.colors.white};
  box-shadow: 0px -2px 8px -2px rgb(0 0 0 / 20%);
  height: 13em;
  padding: 25px 30px 20px 60px;
  display: flex;
  align-items: flex-start;
  border-top: 1px solid ${theme.colors.greyLight};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
`
