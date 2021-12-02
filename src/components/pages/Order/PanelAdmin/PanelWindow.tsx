import OrderContext from "context/OrderContext"
import React, { useContext } from "react"
import styled from "styled-components"
import { theme } from "theme"
import ActionButtons from "components/molecules/ActionButtons"
import EditForm from "components/organisms/EditForm"
import AddForm from "components/organisms/AddForm"

export default function PanelWindow() {
  const { isAddFormVisible, isEditFormVisible } = useContext(OrderContext)

  return (
    <PanelWindowStyled>
      <ActionButtons />
      {isAddFormVisible && (
        <>
          <div className="vertical-separator"></div>
          <AddForm buttonLabel="Ajouter un produit" />
        </>
      )}
      {isEditFormVisible && (
        <>
          <div className="vertical-separator"></div>
          <EditForm />
        </>
      )}
    </PanelWindowStyled>
  )
}

const PanelWindowStyled = styled.div`
  /* border-top: 1px solid ${theme.colors.primary}; */
  background-color: ${theme.colors.white};
  box-shadow: 8px 8px 8px 0px rgb(0 0 0 / 20%);
  height: 11em;
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
