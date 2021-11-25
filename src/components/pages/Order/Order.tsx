import React, { useRef, useState } from "react"
import OrderContext from "context/OrderContext"
import Navbar from "components/molecules/Navbar"
import styled from "styled-components/macro"
import { MenuItem } from "typescript/MenuItem"
import { fakeMenu } from "fakeData/fakeProducts"
import Main from "./Main"
import { BasketItem } from "typescript/BasktItem"

interface OrderProps {
  path: string
}

export const EMPTY_PRODUCT = {
  id: undefined,
  title: "",
  imageSource: "",
  price: undefined,
}

export default function Order(props: OrderProps) {
  const [isModeAdmin, setIsModeAdmin] = useState(false)

  const [menuItems, setMenuItems] = useState<MenuItem[]>(fakeMenu)

  const [itemBeingSelected, setItemBeingSelected] = useState<MenuItem>(EMPTY_PRODUCT)

  const [basket, setBasket] = useState<BasketItem[]>([])

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

  const addToBasket = (burgerTitle: string | undefined) => {
    console.log("burgerTitle: ", burgerTitle)
    //1 copy
    // const basketCopy = [...basket]
    //2
    // basketCopy.burgerTitle =  b

    //3
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
    addToBasket,
    basket,
    setBasket,
  }

  return (
    <OrderStyled>
      <OrderContext.Provider value={orderContextValue}>
        <Navbar />
        <Main />
      </OrderContext.Provider>
    </OrderStyled>
  )
}

const OrderStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 1400px;
  margin: auto;
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 20%);
`
