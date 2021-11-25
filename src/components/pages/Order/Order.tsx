import React, { useRef, useState } from "react"
import OrderContext from "context/OrderContext"
import Navbar from "components/molecules/Navbar"
import styled from "styled-components/macro"
import { MenuItem } from "typescript/MenuItem"
import { fakeMenu1 } from "fakeData/fakeMenu"
import Main from "./Main"
import { useBasket } from "hooks/useBasket"
import { fakeBasket1 } from "fakeData/fakeBasket"
import { useMenu } from "hooks/useMenu"

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

  const { menuItems, handleAdd, handleEdit, handleDelete } = useMenu(fakeMenu1)
  const { basket, handleAddToBasket } = useBasket(fakeBasket1)

  const [itemBeingSelected, setItemBeingSelected] = useState<MenuItem>(EMPTY_PRODUCT)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isAddFormVisible, setIsAddFormVisible] = useState(false)
  const [isEditFormVisible, setIsEditFormVisible] = useState(false)

  const titleEditBoxRef = useRef()

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    menuItems,
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
    handleAddToBasket,
    basket,
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
