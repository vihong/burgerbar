import React, { useContext } from "react"
import AddPlusButtons from "components/atoms/AddPlusButtons"
import styled from "styled-components"
import { theme } from "theme/index"
import { formatPrice } from "utils/maths"
import OrderContext from "components/context/OrderContext"
import Button from "components/atoms/Button"

interface CardProps {
  imageSource?: string
  title?: string
  price?: number | undefined
}

export default function Card(props: CardProps) {
  const { imageSource, title, price } = props

  const { isModeAdmin } = useContext(OrderContext)

  return (
    <CardStyled>
      {isModeAdmin && <Button label={"X"} className="delete-button" />}
      <img src={imageSource} alt="alt_description" />

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
  max-width: 200px;
  min-height: 300px;
  height: auto;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 20%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
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
      font-size: ${theme.fonts.P4};
      font-weight: ${theme.weights.semiBold};
      color: ${theme.colors.black};
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
