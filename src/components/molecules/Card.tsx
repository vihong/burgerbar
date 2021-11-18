import React, { useContext } from "react"
import AddPlusButtons from "components/atoms/AddPlusButtons"
import styled from "styled-components"
import { theme } from "theme/index"
import { formatPrice } from "utils/maths"
import Button from "components/atoms/Button"
import OrderContext from "context/OrderContext"

interface CardProps {
  imageSource?: string
  title?: string
  price?: number | undefined
  [x: string]: any
}

const IMAGE_BY_DEFAULT = "images/coming-soon.png"

export default function Card(props: CardProps) {
  const { id, imageSource, title, price } = props

  const { menuItems, isModeAdmin, handleDelete, setItemBeingSelected, titleEditBoxRef } =
    useContext(OrderContext)

  const handleDeleteButton = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    handleDelete(id)
    setItemBeingSelected({ id: 0, title: "", imageSource: "", price: 0 })
  }

  const handleCardSelected = (idSelected: number): void => {
    if (!isModeAdmin) return
    const itemBeingSelected = menuItems?.find((item) => item.id === idSelected)
    //@ts-ignore
    setItemBeingSelected(itemBeingSelected)
    titleEditBoxRef.current.focus()
  }

  return (
    <CardStyled onClick={() => handleCardSelected(id)}>
      {isModeAdmin && <Button label={"X"} className="delete-button" onClick={handleDeleteButton} />}
      <img src={!imageSource ? IMAGE_BY_DEFAULT : imageSource} alt={title} />

      <div className="card-text">
        <span className="card-title">{title}</span>
        <div className="card-description">
          <span className="left-description">{formatPrice(price)}</span>
          <span className="right-description">
            <AddPlusButtons />
          </span>
        </div>
      </div>
    </CardStyled>
  )
}

const CardStyled = styled.div`
  /* border: 1px solid red; */
  width: 200px;
  min-height: 300px;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 20%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  background-color: ${theme.colors.white};
  .delete-button {
    position: absolute;
    top: 15px;
    right: 15px;
  }

  img {
    /* border: 2px solid green; */
    width: 100%;
    object-fit: contain;
  }
  .card-text {
    /* border: 1px solid yellow; */

    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    .card-title {
      position: relative;
      top: 20px;
      /* border: 1px solid red; */
      font-size: ${theme.fonts.P3};
      font-weight: ${theme.weights.medium};
      color: ${theme.colors.black};
      text-align: center;
      overflow: hidden;
      word-break: break-all;
      text-overflow: ellipsis;
      width: 100%;
      max-height: 30px;
    }
    .card-description {
      position: relative;
      top: 50px;
      width: 100%;
      display: flex;
      justify-content: space-between;

      .left-description {
        font-weight: ${theme.weights.semiBold};
      }
      .right-description {
        font-size: ${theme.fonts.P1};
      }
    }
  }
`
