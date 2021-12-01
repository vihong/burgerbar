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
      <div className="image">
        <img src={!imageSource ? IMAGE_BY_DEFAULT : imageSource} alt={title} />
      </div>

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
  height: 300px;
  border-radius: 5px;
  padding: 20px; // 20px padding-top to avoid click conflict with delete button
  padding-bottom: 10px;
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 20%);
  display: grid;
  grid-template-rows: 65% 1fr;
  grid-gap: 5px;
  position: relative;
  background-color: ${theme.colors.white};
  margin: auto;

  .delete-button {
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
  }

  .image {
    /* border: 2px solid green; */
    /* padding: 0.5em; */
    margin-top: 30px;
    margin-bottom: 20px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .card-text {
    /* border: 1px solid yellow; */
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: flex-end; */
    /* align-items: center; */
    display: grid;
    grid-template-rows: 40% 60%;

    .card-title {
      /* border: 1px solid red; */
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: ${theme.fonts.P3};
      font-weight: ${theme.weights.medium};
      color: ${theme.colors.black};
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .card-description {
      position: relative;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* margin-bottom: 30px; */

      .left-description {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-weight: ${theme.weights.semiBold};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .right-description {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: ${theme.fonts.P1};
      }
    }
  }
`
