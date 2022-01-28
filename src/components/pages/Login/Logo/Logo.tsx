import React from "react"
import styled from "styled-components"
import { theme } from "theme"

export default function Logo() {
  return (
    <LogoStyle>
      <div className="logo-png">
        <img src="images/logo-burger-bicolor.png" alt="burger-icon" />
      </div>
      <h1>Burger Live</h1>
    </LogoStyle>
  )
}

const LogoStyle = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .logo-png {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 150px;
    }
  }
  h1 {
    font-size: ${theme.fonts.P5};
    margin: 0;
    color: ${theme.colors.white};
    font-family: "Gidugu", sans-serif;
    text-transform: uppercase;
    line-height: 1.3em; // to bring h1 close together to logo
    text-align: center;
  }
`
