import React from "react"
import styled from "styled-components"
import { theme } from "theme"
import { IMAGE_BY_DEFAULT } from "./CardPrimary"
import { MdDeleteForever } from "react-icons/md"

interface CardSecondaryProps {
  imageSource?: string
  title?: string // leftInfo
  quantity?: number // rightInfo
  onCardClick?: any
  onDeleteButton?: any
  hasDeleteButton?: boolean | undefined
  isHoverable?: boolean
  onDelete?: any
  [x: string]: any
}

export default function CardSecondary({
  title,
  imageSource,
  quantity,
  onDelete,
}: CardSecondaryProps) {
  return (
    <CardSecondaryStyled>
      <div className="delete-button" onClick={onDelete}>
        <MdDeleteForever className="icon" />
        <span>Supprimer</span>
      </div>
      <div className="image">
        <img src={!imageSource ? IMAGE_BY_DEFAULT : imageSource} alt={title} />
      </div>
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

  .image {
    height: 60px;
    img {
      /* border: 1px solid red; */
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .text-info {
    /* border: 1px solid green; */
    display: grid;
    grid-template-columns: 70% 1fr;
    /* padding: 0.5em 0.7em; */
    font-size: ${theme.fonts.P0};
    > span {
      :first-child {
        /* border: 1px solid blue; */
        font-weight: ${theme.weights.medium};
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-left: 0.8em;
      }
      :nth-child(2) {
        /* border: 1px solid red; */
        color: ${theme.colors.primary};
        font-weight: ${theme.weights.medium};
        text-align: center;
      }
    }
  }

  // card default behaviour
  .delete-button {
    display: none;
  }

  // when hover on card
  :hover {
    .delete-button {
      border: 1px solid red;
      border: none;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      min-width: 3em;
      border-top-right-radius: ${theme.borderRadius.round};
      border-bottom-right-radius: ${theme.borderRadius.round};
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: ${theme.colors.red};
      color: ${theme.colors.white};
      cursor: pointer;

      .icon {
        width: 25px;
        height: 25px;
      }
      span {
        font-size: ${theme.fonts.XS};
        margin: 3px 0;
      }

      // when hover on button
      :hover {
        color: ${theme.colors.black};
      }
    }
  }
`
