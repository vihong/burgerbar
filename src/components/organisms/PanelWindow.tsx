import OrderContext from "context/OrderContext"
import React, { useContext } from "react"
import styled from "styled-components"
import { theme } from "theme"
import ActionButtons from "components/molecules/ActionButtons"
import Form from "./Form"

export default function PanelWindow() {
  const { isAddFormVisible, isEditFormVisible } = useContext(OrderContext)

  // const handleAddButton = async () => {
  //   const itemCreated = {
  //     id: 0,
  //     title: "",
  //     imageSource: "",
  //     price: 0,
  //   }

  //   handleAdd(itemCreated)
  //   setItemBeingSelected(itemCreated)
  //   titleEditBoxRef.current.focus()
  // }

  return (
    <PanelWindowStyled>
      <ActionButtons />
      <div className="vertical-separator"></div>
      {isAddFormVisible && <Form formTitle="Ajouter un produit" />}
      {isEditFormVisible && <Form formTitle="Modifier un produit" />}
    </PanelWindowStyled>
  )
}

const PanelWindowStyled = styled.div`
  /* border-top: 1px solid ${theme.colors.primary}; */
  background-color: white;
  box-shadow: 8px 8px 8px 8px rgb(0 0 0 / 20%);
  min-height: 10em;
  padding: 25px 30px 20px 60px;
  display: flex;
  align-items: flex-start;

  .vertical-separator {
    min-height: 10em;
    margin-left: 70px;
    margin-right: 20px;
    border: 1px solid lightgray;
  }
`
