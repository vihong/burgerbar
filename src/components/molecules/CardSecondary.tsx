import React from "react"
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
  return (
    <CardSecondaryStyled>
      <img src={!imageSource ? IMAGE_BY_DEFAULT : imageSource} alt={title} className="thumbnail" />
      <div className="text-info">
        <span>{title}</span>
        <span>x {quantity}</span>
      </div>
    </CardSecondaryStyled>
  )
}

const CardSecondaryStyled = styled.div`
  /* border: 2px solid red; */
  display: grid;
  grid-template-columns: 30% 1fr;
  grid-template-rows: 1;
  height: 70px;
  padding: 0.5em 0.5em;
  align-items: center;
  border-radius: ${theme.borderRadius.round};
  background: ${theme.colors.white};
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 20%);

  .thumbnail {
    height: 60%;
    width: 100%;
    object-fit: contain;
    border: 1px solid blue;
    display: flex;
    /* background: blue; */
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
      }
      :nth-child(2) {
        color: ${theme.colors.primary};
        font-weight: ${theme.weights.medium};
        /* border: 1px solid red; */
      }
    }
  }
`
