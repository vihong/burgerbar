import React, { useRef, useState } from "react"
import OrderContext from "context/OrderContext"
import styled from "styled-components/macro"
import { MenuItem } from "typescript/MenuItem"
import { fakeMenu2 } from "fakeData/fakeMenu"
import Main from "./Main/Main"
import { useBasket } from "hooks/useBasket"
import { useMenu } from "hooks/useMenu"
import { isProductAdvertised, isProductAvailable } from "enums"
import Navbar from "components/pages/Order/Navbar/Navbar"
import { theme } from "theme"

interface OrderProps {
  path: string
}

export const EMPTY_PRODUCT = {
  id: undefined,
  title: "",
  imageSource: "",
  price: 0,
  added: false,
  quantity: 0,
  isAvailable: isProductAvailable.YES,
  isAdvertised: isProductAdvertised.NO,
}

export default function Order(props: OrderProps) {
  const [isModeAdmin, setIsModeAdmin] = useState(false)

  const { menuItems, handleAdd, handleEdit, handleDelete } = useMenu(fakeMenu2)
  const { basket, handleAddToBasket, handleDeleteFromBasket } = useBasket([])

  const [itemBeingSelected, setItemBeingSelected] = useState<MenuItem>(EMPTY_PRODUCT)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isAddFormVisible, setIsAddFormVisible] = useState(true)
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
    handleDeleteFromBasket,
  }

  return (
    <OrderStyled>
      <OrderContext.Provider value={orderContextValue}>
        <div className="body">
          <div className="container">
            <Navbar />
            <Main />
          </div>
        </div>
      </OrderContext.Provider>
    </OrderStyled>
  )
}

const OrderStyled = styled.div`
  /* border: 1px solid red; */
  background-image: linear-gradient(to bottom, #f7a62e 90%, #ffbe26);

  .body {
    background-image: url(/images/pattern-burger.png);
    background-size: 200px 150px;
    background-color: transparent;
    background-repeat: repeat;
    height: 100vh;
    display: flex;
    /* background-color: #333; */
    .container {
      display: flex;
      flex-direction: column;
      height: 90vh;
      width: 1400px;
      margin: auto;
      box-shadow: 0 0 8px 0 rgb(0 0 0 / 20%);
    }
  }
`
