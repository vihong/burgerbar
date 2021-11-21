import OrderContext from "context/OrderContext"
import React, { useContext, useState } from "react"
import styled from "styled-components"
import { theme } from "theme"
import ButtonCallToAction from "components/atoms/ButtonCallToAction"
import PanelContext from "context/PanelContext"
import ActionButtons from "components/molecules/ActionButtons"

export default function PanelWindow() {
  const [isAddFormVisible, setIsAddFormVisible] = useState(false)
  const [isEditFormVisible, setIsEditFormVisible] = useState(false)

  const panelContextValue = {
    isAddFormVisible,
    setIsAddFormVisible,
    isEditFormVisible,
    setIsEditFormVisible,
  }

  const { handleAdd, itemBeingSelected, setItemBeingSelected, titleEditBoxRef } =
    useContext(OrderContext)

  const handleAddButton = async () => {
    const itemCreated = {
      id: 0,
      title: "",
      imageSource: "",
      price: 0,
    }

    handleAdd(itemCreated)
    setItemBeingSelected(itemCreated)
    titleEditBoxRef.current.focus()
  }

  return (
    <PanelWindowStyled>
      <PanelContext.Provider value={panelContextValue}>
        <ActionButtons />
      </PanelContext.Provider>
    </PanelWindowStyled>
  )
  {
    /* {isVisible && (
        <div>
          <ButtonCallToAction
            label="Ajouter un produit vide"
            IconComponent={<BsPlusSquareFill className="icon" onClick={handleAddButton} />}
          />
          <div className="vertical-separator"></div>
          <Form formTitle={"Modifier un produit sur le menu"} />
        </div>
      )} */
  }
}

const PanelWindowStyled = styled.div`
  /* border-top: 1px solid ${theme.colors.primary}; */
  background-color: white;
  box-shadow: 8px 8px 8px 8px rgb(0 0 0 / 20%);
  min-height: 20vh;
  padding: 20px 30px 20px 60px;
  display: flex;
  align-items: flex-start;
`
