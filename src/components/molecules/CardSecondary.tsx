import React from "react"
import styled from "styled-components"
import { theme } from "theme"
import { IMAGE_BY_DEFAULT } from "./CardPrimary"
import { MdDeleteForever } from "react-icons/md"
import { CSSTransition, TransitionGroup } from "react-transition-group"

interface CardSecondaryProps {
  imageSource?: string
  title?: string
  price?: string
  rightinfo?: string | number
  onCardClick?: any
  onDeleteButton?: any
  hasDeleteButton?: boolean | undefined
  isHoverable?: boolean
  onDelete?: any
  hasCasinoEffect?: boolean
}

export default function CardSecondary({
  imageSource,
  title,
  rightinfo,
  onDelete,
  price,
  hasCasinoEffect,
}: CardSecondaryProps) {
  return (
    <CardSecondaryStyled>
      <div className="delete-button" onClick={onDelete}>
        <MdDeleteForever className="icon" />
      </div>
      <div className="image">
        <img src={!imageSource ? IMAGE_BY_DEFAULT : imageSource} alt={title} />
      </div>
      <div className="text-info">
        <div className="left-info">
          <span className="title">{title}</span>
          {<span className="price">{price}</span>}
        </div>
        {hasCasinoEffect ? (
          <div className="pokemon">
            <TransitionGroup component="span" className="count">
              <CSSTransition classNames="count" timeout={300} key={rightinfo}>
                <div className="pokemon">
                  <span className="right-info">{rightinfo}</span>
                </div>
              </CSSTransition>
            </TransitionGroup>
          </div>
        ) : (
          <span className="right-info">{rightinfo}</span>
        )}
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
  padding: 0.5em 1em;
  padding-right: 0.5em;
  align-items: center;
  border-radius: ${theme.borderRadius.round};
  background: ${theme.colors.white};
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 20%);
  position: relative;

  .pokemon {
    position: relative;
    /* border: 1px solid blue; */
    overflow: hidden;
  }

  .count-enter {
    /* background: red; */
    transform: translateY(100%);
  }

  .count-enter-active {
    /* background: yellow; */
    transition: 300ms;
    transform: translateY(0);
  }

  .count-exit {
    /* background: green; */
    position: absolute;
    left: 0;
    bottom: 0;
    transform: translateY(0);
    transition: 300ms;
  }

  .count-exit-active {
    /* background: red; */
    transform: translateY(-100%);
  }

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
    align-items: center;
    /* padding: 0.5em 0.7em; */
    font-size: ${theme.fonts.P0};
    .left-info {
      /* border: 1px solid blue; */
      font-weight: ${theme.weights.medium};
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-left: 0.9em;
      display: grid;
      line-height: 1.6;
      .price {
        color: ${theme.colors.primary};
        font-size: 0.9em;
        font-weight: ${theme.weights.medium};
      }
    }
    .right-info {
      /* border: 1px solid red; */
      color: ${theme.colors.primary};
      font-weight: ${theme.weights.medium};
      text-align: center;
      margin-left: 10px;
    }
  }

  // card default behaviour
  .delete-button {
    display: none;
    z-index: 1;
  }

  // behaviour on card hover
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
      align-items: center;
      justify-content: center;
      background: ${theme.colors.red};
      color: ${theme.colors.white};
      cursor: pointer;

      .icon {
        width: 25px;
        height: 25px;
      }

      //behaviour on delete-button hover
      :hover {
        text-decoration: underline;

        .icon {
          color: ${theme.colors.black};
        }
      }
    }
  }

  .basketAnimate-enter {
    border: 1px solid red;
  }

  .basketAnimate-enter-active {
    border: 1px solid yellow;
    transition: 3s;
  }
`
