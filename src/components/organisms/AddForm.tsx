import OrderContext from "context/OrderContext"
import React, { useContext, useState } from "react"
import styled from "styled-components"
import { theme } from "theme"
import { FiCheck } from "react-icons/fi"
import { EMPTY_PRODUCT } from "components/pages/Order/Order"
// import toast from "react-hot-toast"
import { MenuItem } from "typescript/MenuItem"
import TextInput from "components/atoms/TextInput"
import { FaHamburger } from "react-icons/fa"
import { BsFillCameraFill } from "react-icons/bs"
import { MdOutlineEuro } from "react-icons/md"

interface FormProps {
  formTitle?: string
  buttonLabel?: string
}

export default function AddForm({ formTitle, buttonLabel }: FormProps) {
  const { handleAdd, titleEditBoxRef } = useContext(OrderContext)

  // @TODO: make generic typing to have generic organism <Form />
  // because here : dynamic typing is here betweem useState<TYPE> and EMPTY_PRODUCT's TYPE
  const [newProduct, setNewProduct] = useState<MenuItem>(EMPTY_PRODUCT)

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const newProductToAdd = {
      ...newProduct,
      id: new Date().getTime(),
    }
    handleAdd(newProductToAdd)
    setNewProduct(EMPTY_PRODUCT)
    // toast.success("Ajouté au menu avec succès!")
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 2000)
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
        </div>
      )}

      <div className="image-preview">
        {newProduct.imageSource ? (
          <img src={newProduct.imageSource} alt={newProduct.title} />
        ) : (
          <div className="empty-image">Aucune image</div>
        )}
      </div>

      <div className="text-inputs">
        <TextInput
          id="title"
          name="title"
          value={newProduct.title}
          type="text"
          placeholder="Produit (ex: Super Burger)"
          onChange={handleChange}
          ref={titleEditBoxRef}
          IconComponent={<FaHamburger className="icon" />}
        />

        <TextInput
          name="imageSource"
          value={newProduct.imageSource}
          type="text"
          placeholder="Lien URL d'une image (ex: https://photo-frites.png)"
          onChange={handleChange}
          IconComponent={<BsFillCameraFill className="icon" />}
        />

        <TextInput
          name="price"
          value={newProduct.price ? newProduct.price : ""}
          type="text"
          placeholder="Prix"
          onChange={handleChange}
          IconComponent={<MdOutlineEuro className="icon" />}
        />
      </div>

      {buttonLabel && (
        <div className="submitButton">
          <button>{buttonLabel}</button>
          {isSubmitted && (
            <div className="submit-message">
              <FiCheck className="icon" />
              <span className="message">Ajouté avec succès !</span>
            </div>
          )}
        </div>
      )}
    </FormStyled>
  )
}

const FormStyled = styled.form`
  /* border: 1px solid blue; */
  display: grid;
  grid-template-columns: 20% 1fr;
  grid-template-rows: 70% 1fr;
  grid-gap: 8px;
  grid-column-gap: 20px;

  width: 70%;
  height: 11em;
  margin: auto 0;
  justify-content: flex-start;
  align-self: flex-start;

  .image-preview {
    grid-area: 1 / 1 / 2/ 2;
    /* background: red; */
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 100px;
      width: 100px;
      object-fit: contain;
      object-position: center;
    }
    .empty-image {
      /* background-color: green; */
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid ${theme.colors.greyLight};
      line-height: 1.5;
      color: ${theme.colors.greyDark};
      border-radius: ${theme.borderRadius.round};
    }
  }

  .text-inputs {
    grid-area: 1 / 2 / 2 / 3;
    /* background: lightblue; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .submitButton {
    /* border: 1px solid red; */
    grid-area: 2 / 2/ 3 / 3;
    display: flex;
    align-items: center;
    button {
      cursor: pointer;
      background: ${theme.colors.greyLight};
      color: ${theme.colors.greyDark};
      border-radius: ${theme.borderRadius.round};
      height: 35px;
      border: none;
      padding: 0 1.5em;
      font-weight: ${theme.weights.semiBold};
      :hover {
        background: ${theme.colors.success};
        color: ${theme.colors.background_white};
      }
      :active {
        background: ${theme.colors.background_white};
        color: ${theme.colors.success};
        border: 1px solid ${theme.colors.success};
      }
    }

    .submit-message {
      /* border: 1px solid blue; */
      .icon {
        color: ${theme.colors.success};
        margin-left: 10px;
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
      }
    }
  }
`
