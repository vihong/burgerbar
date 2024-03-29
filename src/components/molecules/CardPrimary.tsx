import React from "react"
import styled from "styled-components/macro"
import { theme } from "theme/index"
import { TiDelete } from "react-icons/ti"
import { fadeInFromRight, fadeInFromTop } from "theme/animations"

export const IMAGE_BY_DEFAULT = "/images/coming-soon.png"
export const IMAGE_OVERLAP = "/images/stock-epuise.png"

interface CardPrimaryProps {
  imageSource?: string
  title?: string
  [x: string]: any
  onDeleteButton?: any
  onCardClick?: any
  hasDeleteButton?: boolean | undefined
  bottomLeftDescription?: string
  bottomRightDescription?: JSX.Element
  isOverlapImageVisible?: boolean
  isBeingSelected: boolean
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
    isOverlapImageVisible,
    isBeingSelected,
  } = props

  let cardClassName = isBeingSelected ? { background: theme.colors.primary } : {}
  //@TODO: raise deleteButton and isOverLapImage (specific)
  return (
    <CardStyled onClick={onCardClick} style={cardClassName}>
      {hasDeleteButton && (
        <TiDelete
          className={isBeingSelected ? "delete-button with-focus" : "delete-button"}
          onClick={onDeleteButton}
        />
      )}
      <div className="image">
        {isOverlapImageVisible && (
          <div className="overlap">
            <div className="transparent-layer"></div>
            <img className="overlap-image" src={IMAGE_OVERLAP} alt="overlap" />
          </div>
        )}
        <img className="product" src={!imageSource ? IMAGE_BY_DEFAULT : imageSource} alt={title} />
      </div>

      <div className="card-text">
        <span className="card-title">{title}</span>
        <div className="card-description">
          <span
            className="left-description"
            style={{ color: isBeingSelected ? "white" : theme.colors.primary }}
          >
            {bottomLeftDescription}
          </span>
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
  border-radius: ${theme.borderRadius.extraRound};
  padding: 20px; // 20px padding-top to avoid click conflict with delete button
  padding-bottom: 10px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  display: grid;
  grid-template-rows: 65% 1fr;
  grid-gap: 0px;
  position: relative;
  background-color: ${theme.colors.white};

  .ribbon {
    position: absolute;
  }
  .delete-button {
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    /* border: 1px solid red; */
    width: 30px;
    height: 30px;
    color: ${theme.colors.primary};
    z-index: 2;
    animation: ${fadeInFromRight} 500ms ease-out;

    :hover {
      color: ${theme.colors.red};
      /* background-color: red; */
    }
    :active {
      color: ${theme.colors.primary};
    }

    &.with-focus {
      color: white;
      :hover {
        color: ${theme.colors.red};
      }
      :active {
        color: ${theme.colors.white};
      }
    }
  }

  .image {
    /* border: 2px solid green; */
    margin-top: 30px;
    margin-bottom: 20px;
    /* position: relative; */
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .overlap {
      .overlap-image {
        /* border: 1px solid red; */
        position: absolute;
        top: 0;
        bottom: 0;
        width: 80%;
        height: 100%;
        z-index: 1;
        animation: ${fadeInFromTop} 500ms;
        border-radius: ${theme.borderRadius.extraRound};
      }

      .transparent-layer {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 70%;
        background: snow;
        z-index: 1;
        border-radius: ${theme.borderRadius.extraRound};
      }
    }
  }

  .card-text {
    /* border: 1px solid yellow; */
    display: grid;
    grid-template-rows: 30% 70%;
    padding: 0.3em;

    .card-title {
      /* border: 1px solid red; */
      margin: auto 0;
      font-size: ${theme.fonts.P4};
      position: relative;
      bottom: 10px;
      font-weight: ${theme.weights.bold};
      color: ${theme.colors.black};
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
      text-overflow: ellipsis;
      font-family: "Amatic SC", cursive;
    }

    .card-description {
      position: relative;
      display: grid;
      grid-template-columns: 1fr 1fr;

      .left-description {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-weight: ${theme.weights.medium};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: ${theme.weights.medium};
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
