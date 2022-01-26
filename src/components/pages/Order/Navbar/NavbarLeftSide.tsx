import React from "react"
import styled from "styled-components"
import { theme } from "theme"

export default function NavBarLeftSide() {
  return (
    <NavBarLeftSideStyled onClick={() => window.location.reload()}>
      <img src="images/logo-burger.png" alt="burger-icon" />
      <h1>Burger Live</h1>
    </NavBarLeftSideStyled>
  )
}

const NavBarLeftSideStyled = styled.div`
  /* border: 1px solid red; */
  height: 100%;
  min-width: 210px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  img {
    /* border: 1px solid green; */
    object-fit: contain;
    object-position: center;
    height: 4.5vh;
    width: 100px; // for Safari and Firefox
  }
  h1 {
    /* border: 1px solid pink; */
    display: flex;
    width: 100%;
    text-align: center;
    color: ${theme.colors.primary};
    margin-left: 5px;
    font-size: ${theme.fonts.P5};
    text-transform: uppercase;
    font-family: "Gidugu", sans-serif;
    letter-spacing: 1.5px;
  }
`
