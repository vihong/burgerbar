import React, { useState } from "react"
import OrderContext from "context/OrderContext"
import Navbar from "components/molecules/Navbar"
import Menu from "components/organisms/Menu"
import styled from "styled-components"
import PanelAdmin from "components/organisms/PanelAdmin"
import { MenuItem } from "typescript/MenuItem"
import { burgersInMenu } from "fakeData/burgers"
import { createNewItem } from "utils/businessLogic"

interface OrderProps {
  path: string
}

export default function Orders(props: OrderProps) {
  const [isModeAdmin, setIsModeAdmin] = useState(true)

  const [menuItems, setMenuItems] = useState<MenuItem[]>(burgersInMenu)

  const handleAdd = async () => {
    const menuItemsCopy = [...menuItems]

    const itemCreated = createNewItem()
    menuItemsCopy.unshift(itemCreated)
    await setMenuItems(menuItemsCopy)
  }

  const handleDelete = (idToDelete: number): void => {
    const menuItemsCopy = [...menuItems]
    const menuItemsUpdated = menuItemsCopy.filter((menuItem) => menuItem.id !== idToDelete)
    setMenuItems(menuItemsUpdated)
  }

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    menuItems,
    setMenuItems,
    handleAdd,
    handleDelete,
  }

  return (
    <OrderStyled>
      <OrderContext.Provider value={orderContextValue}>
        <Navbar />
        <Menu />
        {isModeAdmin && <PanelAdmin />}
      </OrderContext.Provider>
    </OrderStyled>
  )
}

const OrderStyled = styled.div`
  border: 2px solid green;
  display: flex;
  flex-direction: column;
  height: 100vh;
`
