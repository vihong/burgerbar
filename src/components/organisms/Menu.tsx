import React from "react"
import Card from "components/molecules/Card"
import styled from "styled-components"
import { burgersInMenu } from "fakeData/burgers"

export default function Menu() {
  return (
    <MenuStyled>
      {burgersInMenu.map((burger) => (
        <Card {...burger} />
      ))}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  border: 1px solid green;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  padding: 30px;
  height: calc(100vh - 8vh);
`
