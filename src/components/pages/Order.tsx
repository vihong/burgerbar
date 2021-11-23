import React, { useRef, useState } from "react"
import OrderContext from "context/OrderContext"
import Navbar from "components/molecules/Navbar"
import Menu from "components/organisms/Menu"
import styled from "styled-components/macro"
import PanelAdmin from "components/organisms/PanelAdmin"
import { MenuItem } from "typescript/MenuItem"
import { burgersInMenu } from "fakeData/burgers"

interface OrderProps {
  path: string
}

export const EMPTY_PRODUCT = {
  id: undefined,
  title: "",
  imageSource: "",
  price: undefined,
}

export default function Orders(props: OrderProps) {
  const [isModeAdmin, setIsModeAdmin] = useState(true)

  const [menuItems, setMenuItems] = useState<MenuItem[]>(burgersInMenu)

  const [itemBeingSelected, setItemBeingSelected] = useState<MenuItem>(EMPTY_PRODUCT)

  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isAddFormVisible, setIsAddFormVisible] = useState(false)
  const [isEditFormVisible, setIsEditFormVisible] = useState(false)

  const titleEditBoxRef = useRef()

  const handleAdd = (itemCreated: MenuItem) => {
    const menuItemsCopy = [...menuItems]

    menuItemsCopy.unshift(itemCreated)
    setMenuItems(menuItemsCopy)
  }

  const handleDelete = (idToDelete: number | undefined): void => {
    const menuItemsCopy = [...menuItems]
    const menuItemsUpdated = menuItemsCopy.filter((menuItem) => menuItem.id !== idToDelete)
    setMenuItems(menuItemsUpdated)
  }

  const handleEdit = (itemUpdated: MenuItem): void => {
    const menuItemsCopy = [...menuItems]
    const idOfItemUpdated: any = menuItems.findIndex((item) => item.id === itemUpdated.id)
    menuItemsCopy[idOfItemUpdated] = itemUpdated
    setMenuItems(menuItemsCopy)
  }

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    menuItems,
    setMenuItems,
    handleAdd,
    handleDelete,
    handleEdit,
    itemBeingSelected,
    setItemBeingSelected,
    titleEditBoxRef,
    isEditFormVisible,
    setIsEditFormVisible,
    isAddFormVisible,
    setIsAddFormVisible,
    isCollapsed,
    setIsCollapsed,
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
  display: flex;
  flex-direction: column;
  height: 100vh;
`
