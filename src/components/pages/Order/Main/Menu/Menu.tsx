import React, { useContext } from "react"
import CardPrimary from "components/molecules/CardPrimary"
import styled from "styled-components/macro"
import OrderContext from "context/OrderContext"
import { theme } from "theme"
import { formatPrice } from "utils/maths"
import { MenuItem } from "typescript/MenuItem"
import { isProductAdvertised, isProductAvailable } from "enums"
import { convertStringToBoolean } from "utils/string"
import Ribbon from "components/atoms/Ribbon"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import PrimaryButton from "components/atoms/PrimaryButton"
import EmptyMenu from "./EmptyMenu"
import { checkIsBeingSelected } from "utils/businessLogic"

export default function Menu() {
  const {
    menuItems,
    handleDelete,
    itemBeingSelected,
    setItemBeingSelected,
    isModeAdmin,
    setIsCollapsed,
    setIsAddFormVisible,
    setIsEditFormVisible,
    titleEditBoxRef,
    handleAddToBasket,
    handleDeleteFromBasket,
    name,
    isInitialLoadingDone,
  } = useContext(OrderContext)

  const handleCardSelected = async (idSelected: number | undefined) => {
    if (!isModeAdmin) return
    const itemBeingSelected = menuItems?.find((item) => item.id === idSelected)
    //@ts-ignore
    setItemBeingSelected(itemBeingSelected)
    await setIsCollapsed(false)
    await setIsAddFormVisible(false)
    await setIsEditFormVisible(true)
    titleEditBoxRef.current.focus()
  }

  const handleDeleteButton = (event: React.MouseEvent<HTMLElement>, id: number | undefined) => {
    event.stopPropagation()
    name && handleDelete(id, name)
    handleDeleteFromBasket(id)
    setItemBeingSelected({
      id: 0,
      title: "",
      imageSource: "",
      price: 0,
      quantity: 0,
      isAvailable: isProductAvailable.YES,
      isAdvertised: isProductAdvertised.YES,
    })
  }

  const onAddButton = (event: React.MouseEvent<HTMLElement>, burger: MenuItem) => {
    event.stopPropagation()
    handleAddToBasket(burger)
  }

  let cardClassName = isModeAdmin ? "card is-hoverable" : "card"

  if (isInitialLoadingDone && menuItems.length === 0) return <EmptyMenu />

  return (
    <TransitionGroup component={MenuStyled}>
      {menuItems?.map((burger) => {
        let isBurgerAvailable = convertStringToBoolean(burger.isAvailable)
        let addButtonClass = isBurgerAvailable
          ? "add-to-basket-button"
          : "add-to-basket-button is-disabled"
        let isBurgerAdvertised = convertStringToBoolean(burger.isAdvertised)
        return (
          <CSSTransition appear={true} key={burger.id} timeout={300} classNames="burger-animation">
            <div className={cardClassName}>
              {isBurgerAdvertised && <RibbonAnimated />}
              <CardPrimary
                {...burger}
                isBeingSelected={isModeAdmin && checkIsBeingSelected(itemBeingSelected, burger)}
                isOverlapImageVisible={!isBurgerAvailable}
                onDeleteButton={(event: React.MouseEvent<HTMLElement>) =>
                  handleDeleteButton(event, burger.id)
                }
                onCardClick={() => handleCardSelected(burger.id)}
                hasDeleteButton={isModeAdmin}
                bottomLeftDescription={formatPrice(burger.price)}
                bottomRightDescription={
                  <PrimaryButton
                    label="Ajouter"
                    onClick={(event: React.MouseEvent<HTMLElement>) => onAddButton(event, burger)}
                    className={
                      isModeAdmin && checkIsBeingSelected(itemBeingSelected, burger)
                        ? `${addButtonClass} with-focus`
                        : addButtonClass
                    }
                    disabled={!isBurgerAvailable}
                  />
                }
              />
            </div>
          </CSSTransition>
        )
      })}
    </TransitionGroup>
  )
}

function RibbonAnimated() {
  return (
    <CSSTransition in={true} timeout={500} appear={true} classNames="ribbon-animation">
      <Ribbon className="ribbon" label="nouveau" />
    </CSSTransition>
  )
}

const MenuStyled = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 60px;
  grid-column-gap: 0px;
  padding: 50px 50px 150px;
  overflow-y: scroll;
  background-color: ${theme.colors.background_white};
  box-shadow: 0 8px 20px 8px rgb(0 0 0 / 20%) inset;
  justify-items: center; // hallelujah! this centers the grid itself
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  .icon {
    /* border: 1px solid red; */
    padding: 5px;
    font-size: 20px;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin-right: 0;
    color: ${theme.colors.white};
    background: ${theme.colors.primary};
  }

  .burger-animation-enter {
    opacity: 0.01;
    transform: translateX(-120px);
    &.burger-animation-enter-active {
      opacity: 1;
      transform: translateX(0);
      transition: all 300ms ease-out;
    }
  }

  .burger-animation-exit {
    opacity: 1;
    transform: translateY(0);
    &.burger-animation-exit-active {
      opacity: 0.01;
      transform: translateY(-100px);
      transition: 300ms ease-out;
      /* top: -20px; */
    }
  }

  .ribbon-animation-appear {
    position: absolute;
    opacity: 0.1;
    transform: scale(1.8);
    &.ribbon-animation-appear-active {
      transition: ease-out 500ms;
      opacity: 1;
      transform: scale(1);
    }
  }

  .ribbon-animation-exit {
    position: absolute;
    opacity: 1;
    transition: 1000ms;
    &.ribbon-animation-exit-active {
      opacity: 0.1;
      transform: scale(1.5);
    }
  }

  .card {
    position: relative;
    .ribbon {
      z-index: 2;
    }
  }

  .is-hoverable {
    border-radius: ${theme.borderRadius.extraRound};

    :hover {
      transform: scale(1.05);
      transition: ease-out 0.4s;
      box-shadow: 0 0 8px 0 rgb(255 154 35 / 100%);
      cursor: pointer;
      border-radius: ${theme.borderRadius.extraRound};
    }
  }
  .add-to-basket-button {
    cursor: pointer;
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    border-radius: ${theme.borderRadius.round};
    border: 1px solid ${theme.colors.primary};
    padding: 12px 2em;
    font-weight: ${theme.weights.semiBold};
    font-size: ${theme.fonts.XS};
    :hover {
      color: ${theme.colors.primary};
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.primary};
    }
    :active {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    }

    &.is-disabled {
      opacity: 50%;
      cursor: not-allowed;
      z-index: 2;
    }

    &.with-focus {
      border: 1px solid white;
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
      :hover {
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.white};
      }
      :active {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
      }
    }
  }

  .left-description {
    color: ${theme.colors.primary};
  }
`
