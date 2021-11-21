import React, { useContext } from "react"
import Card from "components/molecules/Card"
import styled from "styled-components/macro"
import OrderContext from "context/OrderContext"
import { theme } from "theme"

export default function Menu() {
  const { menuItems } = useContext(OrderContext)

  return (
    <MenuStyled>
      {menuItems?.map((burger) => (
        <Card key={burger.id} {...burger} />
      ))}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  background-color: ${theme.colors.background_white};
  justify-content: flex-start;
  align-items: flex-start;
  padding: 30px;
  overflow-y: scroll;
  > div {
    margin: 20px 50px;
  }

  .is-hoverable {
    :hover {
      transform: scale(1.05);
      transition: ease-in-out 0.4s;
      box-shadow: 0 0 8px 0 rgb(255 154 35 / 100%);
    }
  }
`
