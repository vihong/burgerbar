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
    setItemBeingSelected({ id: 0, title: "", imageSource: "", price: 0 })
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
            />
          }
        />
      ))}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  background-color: ${theme.colors.background_white};
  justify-content: flex-start;
  align-items: flex-start;
  padding: 30px;
  overflow-y: scroll;
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 20%) inset;

  > div {
    margin: 20px auto;
  }

  .is-hoverable {
    :hover {
      transform: scale(1.05);
      transition: ease-in-out 0.4s;
      box-shadow: 0 0 8px 0 rgb(255 154 35 / 100%);
    }
  }
`
