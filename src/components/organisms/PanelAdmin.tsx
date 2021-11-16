import OrderContext from "context/OrderContext"
import React, { useContext } from "react"
import styled from "styled-components"
import { theme } from "theme"
import Form from "./Form"

export default function PanelAdmin() {
  const { handleAdd } = useContext(OrderContext)

  const handleAddButton = () => {
    handleAdd()
  }

  return (
    <PanelAdminStyled>
      <h2>Panel administrateur</h2>
      <button onClick={handleAddButton} className="add-item-card">
        Ajouter un produit
      </button>
      <Form />
    </PanelAdminStyled>
  )
}

const PanelAdminStyled = styled.div`
  border-top: 1px solid ${theme.colors.primary};
  box-shadow: 8px 8px 8px 8px rgb(0 0 0 / 20%);
  min-height: 20vh;
  padding: 10px 30px;

  .add-item-card {
    display: block;
    margin-bottom: 10px;
  }
`
