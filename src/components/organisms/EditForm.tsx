import OrderContext from "context/OrderContext"
import React, { useContext, useState } from "react"
import styled from "styled-components"
import { theme } from "theme"
import { BsCloudCheck } from "react-icons/bs"

interface FormProps {
  formTitle?: string
  buttonLabel?: string
}

export default function EditForm({ formTitle, buttonLabel }: FormProps) {
  const { itemBeingSelected, setItemBeingSelected, handleEdit, titleEditBoxRef } =
    useContext(OrderContext)

  const [isDoneEditing, setIsDoneEditing] = useState(false)

  const [valueOnFocus, setValueOnFocus] = useState<string | number>()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const singleValueBeingChangedNow = event.target.value
    const itemUpdated = {
      ...itemBeingSelected,
      [event.target.name]: singleValueBeingChangedNow,
    }
    setItemBeingSelected(itemUpdated)
    handleEdit(itemUpdated)
  }

  const handleOnFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setValueOnFocus(event.currentTarget.value)
  }

  const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const valueOnBlur = event.currentTarget.value
    if (valueOnFocus === valueOnBlur) return
    setIsDoneEditing(true)
    setTimeout(() => setIsDoneEditing(false), 1500)
  }

  // créer un composant <Input/>
  return (
    <FormStyled>
      {formTitle && (
        <div className="form-title">
          <h2>{formTitle}</h2>
          {isDoneEditing && (
            <div className="submit-message">
              <BsCloudCheck className="icon" />
              <span className="message">Enregistré</span>
            </div>
          )}
        </div>
      )}
      <div className="inputs-container">
        <div className="image-edit">
          {itemBeingSelected.imageSource ? (
            <img src={itemBeingSelected.imageSource} alt={itemBeingSelected.title} />
          ) : (
            <div className="empty-image">Cliquer sur un produit</div>
          )}
        </div>
        <div className="inputs">
          <label>
            Produit
            <input
              id="title"
              name="title"
              value={itemBeingSelected.title}
              type="text"
              placeholder="Donnez nom délicieux, ex: Super Burger"
              onChange={handleChange}
              ref={titleEditBoxRef}
              onBlur={handleOnBlur}
              onFocus={handleOnFocus}
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
              onBlur={handleOnBlur}
              onFocus={handleOnFocus}
            />
          </label>
          <label>
            Prix
            <input
              name="price"
              value={itemBeingSelected.price ? itemBeingSelected.price : ""}
              type="text"
              placeholder="Prix"
              onChange={handleChange}
              onBlur={handleOnBlur}
              onFocus={handleOnFocus}
            />
          </label>
          {buttonLabel && <button>{buttonLabel}</button>}
        </div>
      </div>
    </FormStyled>
  )
}

const FormStyled = styled.form`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 0px 20px 5px;
  height: 100%;
  margin-left: 30px;

  .form-title {
    /* border: 1px solid red; */
    display: flex;
    align-items: flex-end;
    margin-bottom: 20px;
    line-height: 1;

    h2 {
      /* border: 1px solid blue; */
      margin: 0;
      color: ${theme.colors.primary};
    }
    .submit-message {
      display: flex;
      align-items: center;
      .icon {
        color: ${theme.colors.blue};
        margin-left: 1em;
        width: 1.2em;
        height: 1.2em;
      }
      .message {
        margin-left: 0.5em;
        font-size: ${theme.fonts.P0};
        color: ${theme.colors.blue};
        font-weight: ${theme.weights.medium};
      }
    }
  }

  .inputs-container {
    display: flex;
    .image-edit {
      img {
        height: 100px;
        width: 100px;
        object-fit: contain;
        object-position: center;
        /* border: 1px solid red; */
      }
      .empty-image {
        height: 100px;
        width: 100px;
        display: flex;
        align-items: center;
        text-align: center;
        border: 1px solid ${theme.colors.greyLight};
        line-height: 1.5;
        color: ${theme.colors.greyDark};
        border-radius: ${theme.borderRadius.round};
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
