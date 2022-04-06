import React from "react"
import styled from "styled-components"
import { theme } from "theme"

export default function Logo() {
  return (
    <LogoStyle>
      <div className="logo-png">
        <img src="images/logo-orange.png" alt="burger-icon" />
      </div>
      <h1>Crazee Burger</h1>
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
      width: 200px;
    }
  }
  h1 {
    font-size: ${theme.fonts.P6};
    margin: 0;
    color: ${theme.colors.primary};
    font-family: "Amatic SC", cursive;

    text-transform: uppercase;
    line-height: 1.3em; // to bring h1 close together to logo
    text-align: center;
  }
`
