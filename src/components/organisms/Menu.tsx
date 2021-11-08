import React from "react"
import Card from "components/molecules/Card"
import styled from "styled-components"

export default function Menu() {
  return (
    <MenuStyled>
      <Card
        imageSource="https://www.pngplay.com/wp-content/uploads/2/Burger-Transparent-PNG.png"
        title="Burger House"
      />
      <Card
        imageSource="https://www.pngplay.com/wp-content/uploads/2/Burger-Transparent-PNG.png"
        title="Burger House"
      />
      <Card
        imageSource="https://www.pngplay.com/wp-content/uploads/2/Burger-Transparent-PNG.png"
        title="Burger House"
      />
      <Card
        imageSource="https://www.pngplay.com/wp-content/uploads/2/Burger-Transparent-PNG.png"
        title="Burger House"
      />
      <Card
        imageSource="https://www.pngplay.com/wp-content/uploads/2/Burger-Transparent-PNG.png"
        title="Burger House"
      />
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
