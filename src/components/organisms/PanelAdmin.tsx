import OrderContext from "context/OrderContext"
import React, { useContext } from "react"
import styled from "styled-components"
import { theme } from "theme"
import { createNewItem } from "utils/businessLogic"
import Form from "./Form"
import ButtonCallToAction from "components/atoms/ButtonCallToAction"

export default function PanelAdmin() {
  const { handleAdd, titleEditBoxRef, setItemBeingSelected } = useContext(OrderContext)

  const handleAddButton = async () => {
    const itemCreated = createNewItem()

    handleAdd(itemCreated)
    setItemBeingSelected(itemCreated)
    titleEditBoxRef.current.focus()
  }

  return (
    <PanelAdminStyled>
      <ButtonCallToAction onClick={handleAddButton} />
      <div className="vertical-separator"></div>
      <Form formTitle={"Cliquez sur un produit pour le modifier"} />
    </PanelAdminStyled>
  )
}

const PanelAdminStyled = styled.div`
  border-top: 1px solid ${theme.colors.primary};
  box-shadow: 8px 8px 8px 8px rgb(0 0 0 / 20%);
  min-height: 20vh;
  padding: 20px 30px;
  display: flex;
  align-items: flex-start;

  .vertical-separator {
    height: 100%;
    border: 1px solid lightgray;
  }
`
