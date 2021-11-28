import OrderContext from "context/OrderContext"
import React, { useContext, useState } from "react"
import styled from "styled-components"
import { theme } from "theme"
// import { FiCheck } from "react-icons/fi"
import { EMPTY_PRODUCT } from "components/pages/Order/Order"
import toast from "react-hot-toast"
import { MenuItem } from "typescript/MenuItem"

interface FormProps {
  formTitle?: string
  buttonLabel?: string
}

export default function AddForm({ formTitle, buttonLabel }: FormProps) {
  const { handleAdd, titleEditBoxRef } = useContext(OrderContext)

  // @TODO: make generic typing to have generic organism <Form />
  // because here : dynamic typing is here betweem useState<TYPE> and EMPTY_PRODUCT's TYPE
  const [newProduct, setNewProduct] = useState<MenuItem>(EMPTY_PRODUCT)

  // const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const newProductToAdd = {
      ...newProduct,
      id: new Date().getTime(),
    }
    handleAdd(newProductToAdd)
    setNewProduct(EMPTY_PRODUCT)
    toast.success("Ajouté au menu avec succès!")
    // setIsSubmitted(true)
    // setTimeout(() => setIsSubmitted(false), 1500)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const singleValueBeingChangedNow = event.target.value
    console.log("singleValueBeingChangedNow: ", singleValueBeingChangedNow)
    const newProductUpdated = {
      ...newProduct,
      [event.target.name]: singleValueBeingChangedNow,
    }
    setNewProduct(newProductUpdated)
  }

  // créer un composant <Input/>
  return (
    <FormStyled action="submit" onSubmit={handleSubmit}>
      {formTitle && (
        <div className="form-title">
          <h2>{formTitle}</h2>
          {/* {isSubmitted && (
            <div className="submit-message">
              <FiCheck className="icon" />
              <span className="message">Ajouté au menu !</span>
            </div>
          )} */}
        </div>
      )}
      <div className="inputs-container">
        <div className="image-edit">
          {newProduct.imageSource && <img src={newProduct.imageSource} alt={newProduct.title} />}
        </div>
        <div className="inputs">
          <label>
            Produit
            <input
              id="title"
              name="title"
              value={newProduct.title}
              type="text"
              placeholder="Donnez nom délicieux, ex: Super Burger"
              onChange={handleChange}
              ref={titleEditBoxRef}
            />
          </label>
          <label>
            Image
            <input
              name="imageSource"
              value={newProduct.imageSource}
              type="text"
              placeholder="Ajouter le lien URL d'une image"
              onChange={handleChange}
            />
          </label>
          <label>
            Prix
            <input
              name="price"
              value={newProduct.price ? newProduct.price : ""}
              type="text"
              placeholder="Prix"
              onChange={handleChange}
            />
          </label>
          {buttonLabel && (
            <div className="submitButton">
              <button>{buttonLabel}</button>
            </div>
          )}
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
        color: ${theme.colors.success};
        margin-left: 1em;
        width: 1em;
        height: 1em;
        border: 1px solid ${theme.colors.success};
        border-radius: 50%;
        vertical-align: middle;
      }
      .message {
        margin-left: 5px;
        font-size: ${theme.fonts.P0};
        color: ${theme.colors.success};
        font-weight: ${theme.weights.medium};
      }
    }
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

  .submitButton {
    /* border: 1px solid red; */
    display: inline-flex;

    button {
      background: ${theme.colors.greyLight};
      color: ${theme.colors.greyDark};
      border-radius: ${theme.borderRadius.round};
      border: none;
      padding: 2px 8px;
      display: flex;
      :hover {
        cursor: pointer;
        background: ${theme.colors.primary};
        color: ${theme.colors.background_white};
      }
    }
  }
`
