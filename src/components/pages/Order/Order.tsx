import React, { useRef, useState } from "react"
import OrderContext from "context/OrderContext"
import Navbar from "components/molecules/Navbar"
import styled from "styled-components/macro"
import { MenuItem } from "typescript/MenuItem"
import { fakeMenu } from "fakeData/fakeProducts"
import Main from "./Main"
import { BasketItem } from "typescript/BasketItem"

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

  const [basket, setBasket] = useState<BasketItem[]>([
    {
      id: 1,
      title: "Burger Meal",
      imageSource: "images/burger1.png",
      quantity: 1,
    },
  ])

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

  const handleAddToBasket = (productAdded: MenuItem) => {
    //1. Copy state before any potential work on it
    const basketCopy = [...basket]

    const indexOfExistingProductInBasket = basketCopy.findIndex(
      (basketItem) => basketItem.id === productAdded.id
    )

    const isInBasket = indexOfExistingProductInBasket !== -1 ? true : false

    if (!isInBasket) {
      // create new basketItem
      const newBasketItem: BasketItem = {
        id: productAdded.id,
        title: productAdded.title,
        imageSource: productAdded.imageSource,
        quantity: 1,
      }
      // add new basketItem to basketCopy
      setBasket([...basketCopy, newBasketItem])
      // setState
    } else {
      basketCopy[indexOfExistingProductInBasket].quantity += 1
      setBasket(basketCopy)
    }
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
    handleAddToBasket,
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
