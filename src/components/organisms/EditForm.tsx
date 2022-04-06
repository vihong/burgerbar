import OrderContext from "context/OrderContext"
import React, { useContext, useState } from "react"
import styled from "styled-components"
import { theme } from "theme"
import { BsCloudCheck, BsFillCameraFill } from "react-icons/bs"
import TextInput from "components/atoms/TextInput"
import { FaHamburger } from "react-icons/fa"
import { MdOutlineEuro } from "react-icons/md"
import SelectInput from "components/atoms/SelectInput"
import { FiPackage } from "react-icons/fi"
import { GoMegaphone } from "react-icons/go"
import { isProductAdvertised, isProductAvailable } from "enums"
import { fadeIn } from "theme/animations"

interface FormProps {
  formTitle?: string
  buttonLabel?: string
}

export default function EditForm({ formTitle, buttonLabel }: FormProps) {
  const { itemBeingSelected, setItemBeingSelected, handleEdit, titleEditBoxRef, name } =
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
    name && handleEdit(itemUpdated, name)
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

  // @FIXME: Add proper types for KeyboardEvent
  // (see more : https://stackoverflow.com/questions/46462841/typescript-react-whats-the-correct-type-of-the-parameter-for-onkeypress)
  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") handleOnBlur(event)
  }

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
          <div className="empty-image">Aucune image</div>
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
          className="first-row"
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
          className="second-row"
        />

        <div className="third-row">
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
          <SelectInput
            options={[
              { id: 1, label: "En stock", value: isProductAvailable.YES },
              { id: 2, label: "En rupture", value: isProductAvailable.NO },
            ]}
            IconComponent={<FiPackage className="icon" />}
            onChange={handleChange}
            name="isAvailable"
            value={itemBeingSelected.isAvailable}
            onBlur={handleOnBlur}
            onFocus={handleOnFocus}
          />
          <SelectInput
            options={[
              { id: 1, label: "Sans pub", value: isProductAdvertised.NO },
              { id: 2, label: "Avec pub", value: isProductAdvertised.YES },
            ]}
            IconComponent={<GoMegaphone className="icon" />}
            onChange={handleChange}
            name="isAdvertised"
            value={itemBeingSelected.isAdvertised}
            onBlur={handleOnBlur}
            onFocus={handleOnFocus}
          />
        </div>
      </div>

      <div className="hint">
        {isDoneEditing ? (
          <div className="submit-message">
            <BsCloudCheck className="icon" />
            <span className="message">Modifications enregistrées !</span>
          </div>
        ) : (
          <span className="hint-message">
            Cliquer sur un produit du menu pour le modifier{" "}
            <span className="real-time">en temps réel</span>
          </span>
        )}
      </div>
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
      animation: ${fadeIn} 1s;

    }
    .empty-image {
      /* background-color: green; */
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      border: 1px solid ${theme.colors.greyLight};
      line-height: 1.5;
      color: ${theme.colors.greySemiDark};
      border-radius: ${theme.borderRadius.round};
    }
  }

  .text-inputs {
    grid-area: 1 / 2 / 2 / 3;
    /* background-color: lightblue; */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-row-gap: 8px;

    .first-row {
      /* border: 1px solid red; */
      grid-area: 1 / 1 / 2 / 4;
    }

    .second-row {
      /* border: 1px solid blue; */
      grid-area: 2 / 1 / 2 / 4;
    }

    .third-row {
      /* border: 1px solid green; */
      grid-area: 3 / 1 / 4 / 4;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 8px;
    }
  }
  }

  .hint {
    grid-area: 2 / 2 / 3 / 3;
    display: flex;
    align-items: center;
    .hint-message {
      font-size: ${theme.fonts.P0};
      flex: 1;
      color: ${theme.colors.primary};
      font-weight: ${theme.weights.regular};
      .real-time {
        text-decoration: underline;
      }
    }
    .submit-message {
      display: flex;
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
`
