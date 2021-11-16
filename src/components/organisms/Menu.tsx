import React, { useState } from "react"
import Card from "components/molecules/Card"
import styled from "styled-components"
import { burgersInMenu } from "fakeData/burgers"
import { MenuItems } from "typescript/MenuItems"

export default function Menu() {
  const [menuItems, setMenuItems] = useState<MenuItems[]>(burgersInMenu)

  const handleDelete = (idToDelete: number): void => {
    const menuItemsCopy = [...menuItems]
    const menuItemsUpdated = menuItemsCopy.filter((menuItem) => menuItem.id !== idToDelete)
    setMenuItems(menuItemsUpdated)
  }

  return (
    <MenuStyled>
      {menuItems.map((burger) => (
        <Card {...burger} handleDelete={handleDelete} />
      ))}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  padding: 30px;
  height: calc(80vh - 8vh);
`
