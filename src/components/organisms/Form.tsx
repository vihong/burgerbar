import OrderContext from "context/OrderContext"
import React, { useContext } from "react"
import styled from "styled-components"
import { theme } from "theme"

interface FormProps {
  formTitle?: string
}

export default function Form({ formTitle }: FormProps) {
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
      <h2>{formTitle}</h2>
      <div className="inputs-container">
        <div className="image-edit">
          {itemBeingSelected.imageSource && <img src={itemBeingSelected.imageSource} />}
        </div>
        <div className="inputs">
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
        </div>
      </div>
    </FormStyled>
  )
}

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 0px 20px 5px;
  height: 100%;
  margin-left: 30px;

  h2 {
    margin: 20 0;
    color: ${theme.colors.black};
  }

  .inputs-container {
    display: flex;
    .image-edit {
      height: 100px;
      width: 100px;
      img {
        height: 100%;
        width: 100%;
        object-fit: contain;
        object-position: center;
      }
    }

    .inputs {
      flex: 1;

      margin-left: 50px;
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
    }
  }
`
