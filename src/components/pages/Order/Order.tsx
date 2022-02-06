import React, { useEffect, useRef, useState } from "react"
import OrderContext from "context/OrderContext"
import styled from "styled-components/macro"
import { MenuItem } from "typescript/MenuItem"
import Main from "./Main/Main"
import { useBasket } from "hooks/useBasket"
import { useMenu } from "hooks/useMenu"
import { isProductAdvertised, isProductAvailable } from "enums"
import Navbar from "components/pages/Order/Navbar/Navbar"
import { theme } from "theme"
import { getDatabase, onValue, ref } from "firebase/database"

interface OrderProps {
  path: string
  name?: string
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
  const { name } = props

  const [isModeAdmin, setIsModeAdmin] = useState(false)

  const { menuItems, setMenuItems, handleAdd, handleEdit, handleDelete } = useMenu(name, [])
  const { basket, handleAddToBasket, handleDeleteFromBasket } = useBasket([])

  const [itemBeingSelected, setItemBeingSelected] = useState<MenuItem>(EMPTY_PRODUCT)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isAddFormVisible, setIsAddFormVisible] = useState(true)
  const [isEditFormVisible, setIsEditFormVisible] = useState(false)

  const titleEditBoxRef = useRef()

  useEffect(() => {
    const db = getDatabase()
    const usersRef = ref(db, name)
    onValue(usersRef, (snapshot) => {
      const data = snapshot.val()
      console.log("data: ", data)
      if (!data) return
      // const newData = Object.values(data)
      // console.log("newData:", newData)
      if (menuItems !== data) {
        setMenuItems(data.burgers)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
    name,
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
  background-image: linear-gradient(to bottom, #ff9f1b 20%, #f7a62e 70%, #ffbe26);

  .body {
    background-image: url(/images/pattern-burger.png);
    background-size: 200px 150px;
    background-color: transparent;
    background-repeat: repeat;
    height: 100vh;
    display: flex;
    /* background-color: #333; */
    .container {
      border-radius: ${theme.borderRadius.extraRound};
      display: flex;
      flex-direction: column;
      height: 95vh;
      width: 1400px;
      margin: auto;
      box-shadow: 0 0 8px 0 rgb(0 0 0 / 20%);
    }
  }
`
