import OrderContext from "context/OrderContext"
import React, { useContext, useState } from "react"
import styled from "styled-components"
import { theme } from "theme"
import { BsCloudCheck, BsFillCameraFill } from "react-icons/bs"
import TextInput from "components/atoms/TextInput"
import { FaHamburger } from "react-icons/fa"
import { MdOutlineEuro } from "react-icons/md"

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
    setTimeout(() => setIsDoneEditing(false), 2000)
  }

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") handleOnBlur(event)
  }

  // créer un composant <Input/>
  return (
    <FormStyled>
      {formTitle && (
        <div className="form-title">
          <h2>{formTitle}</h2>
        </div>
      )}
      <div className="image-preview">
        {itemBeingSelected.imageSource ? (
          <img src={itemBeingSelected.imageSource} alt={itemBeingSelected.title} />
        ) : (
          <div className="empty-image">Cliquer sur un produit</div>
        )}
      </div>

      <div className="text-inputs">
        <TextInput
          id="title"
          name="title"
          value={itemBeingSelected.title}
          type="text"
          placeholder="Produit (ex: Super Burger)"
          onChange={handleChange}
          ref={titleEditBoxRef}
          onBlur={handleOnBlur}
          onFocus={handleOnFocus}
          IconComponent={<FaHamburger className="icon" />}
          onKeyPress={handleKeyPress}
        />

        <TextInput
          name="imageSource"
          value={itemBeingSelected.imageSource}
          type="text"
          placeholder="Lien URL d'une image (ex: https://photo-frites.png)"
          onChange={handleChange}
          onBlur={handleOnBlur}
          onFocus={handleOnFocus}
          IconComponent={<BsFillCameraFill className="icon" />}
          onKeyPress={handleKeyPress}
        />

        <TextInput
          name="price"
          value={itemBeingSelected.price ? itemBeingSelected.price : ""}
          type="text"
          placeholder="Prix"
          onChange={handleChange}
          onBlur={handleOnBlur}
          onFocus={handleOnFocus}
          IconComponent={<MdOutlineEuro className="icon" />}
          onKeyPress={handleKeyPress}
        />
      </div>

      {buttonLabel && <button>{buttonLabel}</button>}
      {isDoneEditing && (
        <div className="submit-message">
          <BsCloudCheck className="icon" />
          <span className="message">Modifications enregistrées !</span>
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
    /* background-color: red; */

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
      align-items: center;
      text-align: center;
      border: 1px solid ${theme.colors.greyLight};
      line-height: 1.5;
      color: ${theme.colors.greyDark};
      border-radius: ${theme.borderRadius.round};
    }
  }

  .text-inputs {
    grid-area: 1 / 2 / 2 / 3;
    /* background-color: lightblue; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .submit-message {
    grid-area: 2 / 2/ 3 / 3;
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
`
