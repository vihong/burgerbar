import OrderContext from "context/OrderContext"
import React, { useContext } from "react"
import styled from "styled-components"
import { theme } from "theme"
import ActionButtons from "components/molecules/ActionButtons"
import EditForm from "./EditForm"
import AddForm from "./AddForm"

export default function PanelWindow() {
  const { isAddFormVisible, isEditFormVisible } = useContext(OrderContext)

  return (
    <PanelWindowStyled>
      <ActionButtons />
      <div className="vertical-separator"></div>
      {isAddFormVisible && (
        <AddForm formTitle="Ajouter un produit" buttonLabel="Ajouter un produit" />
      )}
      {isEditFormVisible && <EditForm formTitle="Modifier un produit" />}
    </PanelWindowStyled>
  )
}

const PanelWindowStyled = styled.div`
  /* border-top: 1px solid ${theme.colors.primary}; */
  background-color: white;
  box-shadow: 8px 8px 8px 8px rgb(0 0 0 / 20%);
  min-height: 11em;
  padding: 25px 30px 20px 60px;
  display: flex;
  align-items: flex-start;

  .vertical-separator {
    min-height: 11em;
    margin-left: 70px;
    margin-right: 20px;
    border: 1px solid lightgray;
  }
`
