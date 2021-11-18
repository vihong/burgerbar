import OrderContext from "context/OrderContext"
import React, { useContext } from "react"
import styled from "styled-components"
import { theme } from "theme"

export default function Form() {
  const { itemBeingSelected, setItemBeingSelected, handleEdit, titleEditBoxRef } =
    useContext(OrderContext)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const singleValueBeingChangedNow = event.target.value
    const itemUpdated = {
      ...itemBeingSelected,
      [event.target.name]: singleValueBeingChangedNow,
    }
    setItemBeingSelected(itemUpdated)
    handleEdit(itemUpdated)
  }

  // créer un composant <Input/>
  return (
    <FormStyled>
      <label>
        Produit
        <input
          id="title"
          name="title"
          value={itemBeingSelected.title}
          type="text"
          placeholder="Cliquer sur un produit pour l'éditer"
          onChange={handleChange}
          ref={titleEditBoxRef}
        />
      </label>
      <label>
        Image
        <input
          name="imageSource"
          value={itemBeingSelected.imageSource}
          type="text"
          placeholder="Ajouter le lien URL d'une image"
          onChange={handleChange}
        />
      </label>
      <label>
        Prix
        <input
          name="price"
          value={itemBeingSelected.price}
          type="text"
          placeholder="Prix"
          onChange={handleChange}
        />
      </label>
    </FormStyled>
  )
}

const FormStyled = styled.form`
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: space-between;
  align-self: center;
  label {
    display: flex;
    margin-right: 30px;
    margin-top: 8px;
    margin-bottom: 8px;
    justify-content: space-between;
    font-size: ${theme.fonts.P0};
    font-weight: ${theme.weights.medium};
    input {
      width: 300px;
      flex: 1;
      margin-left: 30px;
    }
  }
`
