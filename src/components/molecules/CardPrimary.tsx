import React from "react"
import styled from "styled-components/macro"
import { theme } from "theme/index"
import Button from "components/atoms/Button"

export const IMAGE_BY_DEFAULT = "images/coming-soon.png"

interface CardPrimaryProps {
  imageSource?: string
  title?: string
  [x: string]: any
  onDeleteButton?: any
  onCardClick?: any
  hasDeleteButton?: boolean | undefined
  isHoverable?: boolean
  bottomLeftDescription?: string
  bottomRightDescription?: JSX.Element
}

export default function CardPrimary(props: CardPrimaryProps) {
  const {
    imageSource,
    title,
    bottomLeftDescription,
    bottomRightDescription,
    onDeleteButton,
    onCardClick,
    hasDeleteButton,
    isHoverable,
  } = props

  return (
    <CardStyled onClick={onCardClick} className={isHoverable ? "is-hoverable" : ""}>
      {hasDeleteButton && <Button label={"X"} className="delete-button" onClick={onDeleteButton} />}
      <img src={!imageSource ? IMAGE_BY_DEFAULT : imageSource} alt={title} />

      <div className="card-text">
        <span className="card-title">{title}</span>
        <div className="card-description">
          <span className="left-description">{bottomLeftDescription}</span>
          <span className="right-description">{bottomRightDescription}</span>
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
  margin: auto;

  .delete-button {
    position: absolute;
    top: 15px;
    right: 15px;
  }

  img {
    border: 2px solid green;
    width: 100%;
    object-fit: contain;
  }
  .card-text {
    /* border: 1px soli d yellow; */

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
      white-space: nowrap;
      overflow: hidden;
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
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 50%;
      }
      .right-description {
        font-size: ${theme.fonts.P1};
      }
    }
  }
`
