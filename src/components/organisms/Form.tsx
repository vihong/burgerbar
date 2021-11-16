import OrderContext from "context/OrderContext"
import React, { useContext } from "react"
import styled from "styled-components"
import { theme } from "theme"

export default function Form() {
  const { itemBeingSelected, setItemBeingSelected, handleEdit } = useContext(OrderContext)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const singleValueBeingChangedNow = event.target.value
    const itemUpdated = {
      ...itemBeingSelected,
      [event.target.name]: singleValueBeingChangedNow,
    }
    setItemBeingSelected(itemUpdated)
    handleEdit(itemUpdated)
  }

  return (
    <FormStyled>
      <label>
        Nom du produit
        <input
          id="title"
          name="title"
          value={itemBeingSelected.title}
          type="text"
          placeholder="Cliquer sur un produit pour l'éditer"
          onChange={handleChange}
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
  display: flex;
  width: 60%;
  justify-content: space-between;

  label {
    display: flex;
    flex-direction: column;
    font-size: ${theme.fonts.P0};
    font-weight: ${theme.weights.medium};
    input {
      margin-top: 5px;
      width: 300px;
    }
  }
`
