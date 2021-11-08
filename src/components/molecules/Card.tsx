import React from "react"
import styled from "styled-components"
import { MdOutlineAdd } from "react-icons/md"
import { BiMinus } from "react-icons/bi"
import { theme } from "theme/index"

interface CardProps {
  imageSource?: string
  title?: string
  description?: string
  price?: string
}

export default function Card(props: CardProps) {
  const { imageSource, title, description, price } = props
  return (
    <CardStyled>
      <img src={imageSource} alt="alt_description" />

      <div className="card-text">
        <span className="card-title">{title}</span>
        <div className="card-description">
          <span className="left-description">$5.19</span>
          <span className="right-description">
            <AddPlusButtons />
          </span>
        </div>
      </div>
    </CardStyled>
  )
}

function AddPlusButtons() {
  return (
    <AddPlusButtonsStyled>
      <button className="plus-icon">
        <MdOutlineAdd />
      </button>
      <button className="minus-icon">
        <BiMinus />
      </button>
    </AddPlusButtonsStyled>
  )
}

const AddPlusButtonsStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .plus-icon {
    height: 20px;
    border: 2px solid ${theme.colors.black};
    border-right-width: 1px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    color: ${theme.colors.green};
    font-weight: ${theme.weights.bold};
  }
  .minus-icon {
    height: 20px;
    border: 2px solid ${theme.colors.black};
    border-left-width: 1px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    color: ${theme.colors.red};
  }
`

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
