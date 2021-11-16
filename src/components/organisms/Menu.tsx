import React, { useContext } from "react"
import Card from "components/molecules/Card"
import styled from "styled-components"
import OrderContext from "context/OrderContext"

export default function Menu() {
  const { menuItems, setMenuItems } = useContext(OrderContext)

  return (
    <MenuStyled>
      {menuItems?.map((burger) => (
        <Card {...burger} />
      ))}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  padding: 30px;
  overflow-y: scroll;
  max-height: 72vh;
  > div {
    margin: 20px 10px;
  }
`
