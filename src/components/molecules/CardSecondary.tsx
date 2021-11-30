import React, { useState } from "react"
import styled from "styled-components"
import { theme } from "theme"
import { IMAGE_BY_DEFAULT } from "./CardPrimary"

interface CardSecondaryProps {
  imageSource?: string
  title?: string // leftInfo
  quantity?: number // rightInfo
  onCardClick?: any
  onDeleteButton?: any
  hasDeleteButton?: boolean | undefined
  isHoverable?: boolean
  [x: string]: any
}

export default function CardSecondary({ title, imageSource, quantity }: CardSecondaryProps) {
  const [isCardHovered, setIsCardHovered] = useState(false)

  const onHover = () => {
    console.log("onHover")
    setIsCardHovered(true)
  }

  const onMouseLeave = () => {
    console.log("onMouseLeave")
    setIsCardHovered(!isCardHovered)
  }

  return (
    <CardSecondaryStyled onMouseEnter={onHover} onMouseLeave={onMouseLeave}>
      {isCardHovered && <button className="delete-button">Supprimer</button>}
      <img src={!imageSource ? IMAGE_BY_DEFAULT : imageSource} alt={title} className="thumbnail" />
      <div className="text-info">
        <span className="left-info">{title}</span>
        <span className="right-info">x {quantity}</span>
      </div>
    </CardSecondaryStyled>
  )
}

const CardSecondaryStyled = styled.div`
  /* border: 2px solid red; */
  display: grid;
  grid-template-columns: 30% 1fr;
  grid-template-rows: 1;
  min-height: 70px;
  padding: 0.5em 0.5em;
  align-items: center;
  border-radius: ${theme.borderRadius.round};
  background: ${theme.colors.white};
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 20%);
  position: relative;

  .thumbnail {
    height: 60%;
    width: 100%;
    object-fit: contain;
    /* border: 1px solid blue; */
    display: flex;
    /* background: blue; */
    overflow-y: hidden;
  }

  .text-info {
    /* border: 1px solid green; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5em 0.7em;
    font-size: ${theme.fonts.P0};
    > span {
      :first-child {
        font-weight: ${theme.weights.medium};
        /* border: 1px solid blue; */
        width: 50%;
        //@FIXME: the overflow is hidden but will keep pushing if user types too many characters
        overflow-x: hidden;
      }
      :nth-child(2) {
        color: ${theme.colors.primary};
        font-weight: ${theme.weights.medium};
        /* border: 1px solid red; */
      }
    }
  }

  .delete-button {
    border: 1px solid red;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    border-top-right-radius: ${theme.borderRadius.round};
    border-bottom-right-radius: ${theme.borderRadius.round};
    padding: 10px;
    display: flex;
    align-items: center;
    background: ${theme.colors.redSecondary};
    color: ${theme.colors.white};

    :hover {
      text-decoration: underline;
    }
  }
`
