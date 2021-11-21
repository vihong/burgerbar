import OrderContext from "context/OrderContext"
import React, { useContext, useState } from "react"
import styled from "styled-components"
import { theme } from "theme"
import ButtonCallToAction from "components/atoms/ButtonCallToAction"
import { BsPlusSquareFill } from "react-icons/bs"

export default function PanelWindow() {
  const [isAddFormVisible, setIsAddFormVisible] = useState(false)
  const [isEditFormVisible, setIsEditFormVisible] = useState(false)

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
      <button
        onClick={() => setIsAddFormVisible(!isAddFormVisible)}
        className="inside-buttons add-button"
      >
        Add
      </button>
      <button
        onClick={() => setIsEditFormVisible(!isEditFormVisible)}
        className="inside-buttons edit-button"
      >
        Edit
      </button>
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
  background-color: ${theme.colors.background_white};
  box-shadow: 8px 8px 8px 8px rgb(0 0 0 / 20%);
  min-height: 20vh;
  padding: 20px 30px 20px 60px;
  display: flex;
  align-items: flex-start;

  .inside-buttons {
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    bottom: 30px;
    left: 30px;
  }

  .inside-buttons.add-button {
    color: red;
    bottom: 80px;
  }

  .inside-buttons.edit-button {
    color: red;
    bottom: 130px;
  }

  .vertical-separator {
    height: 100%;
    border: 1px solid lightgray;
  }
`
