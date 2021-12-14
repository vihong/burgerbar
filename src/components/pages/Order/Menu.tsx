import React, { useContext } from "react"
import CardPrimary from "components/molecules/CardPrimary"
import styled from "styled-components/macro"
import OrderContext from "context/OrderContext"
import { theme } from "theme"
import { formatPrice } from "utils/maths"
import Button from "components/atoms/Button"
import { MenuItem } from "typescript/MenuItem"

export default function Menu() {
  const {
    menuItems,
    handleDelete,
    setItemBeingSelected,
    isModeAdmin,
    setIsCollapsed,
    setIsAddFormVisible,
    setIsEditFormVisible,
    titleEditBoxRef,
    handleAddToBasket,
    handleDeleteFromBasket,
  } = useContext(OrderContext)

  //@ts-ignore
  const handleCardSelected = async (idSelected: number | undefined): void => {
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
    handleDelete(id)
    handleDeleteFromBasket(id)
    setItemBeingSelected({
      id: 0,
      title: "",
      imageSource: "",
      price: 0,
      quantity: 0,
      isAvailable: true,
    })
  }

  const onAddButton = (event: React.MouseEvent<HTMLElement>, burger: MenuItem) => {
    event.stopPropagation()
    handleAddToBasket(burger)
  }

  return (
    <MenuStyled>
      {menuItems?.map((burger) => (
        <CardPrimary
          key={burger.id}
          {...burger}
          onDeleteButton={(event: React.MouseEvent<HTMLElement>) =>
            handleDeleteButton(event, burger.id)
          }
          onCardClick={() => handleCardSelected(burger.id)}
          hasDeleteButton={isModeAdmin}
          isHoverable={isModeAdmin}
          bottomLeftDescription={formatPrice(burger.price)}
          bottomRightDescription={
            <Button
              label="Ajouter"
              onClick={(event: React.MouseEvent<HTMLElement>) => onAddButton(event, burger)}
              className="add-to-basket-button"
            />
          }
        />
      ))}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 60px;
  grid-column-gap: 0px;
  padding: 50px 50px 150px;
  overflow-y: scroll;
  background-color: ${theme.colors.background_white};
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 20%) inset;
  justify-items: center; // hallelujah! this centers the grid itself

  .is-hoverable {
    :hover {
      transform: scale(1.05);
      transition: ease-in-out 0.4s;
      box-shadow: 0 0 8px 0 rgb(255 154 35 / 100%);
      cursor: pointer;
    }
  }
  .add-to-basket-button {
    cursor: pointer;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.round};
    height: 35px;
    border: none;
    padding: 0 1.5em;
    font-weight: ${theme.weights.semiBold};
    :hover {
      background: ${theme.colors.white};
      color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
    }
    :active {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    }
  }

  .left-description {
    color: ${theme.colors.primary};
  }
`
