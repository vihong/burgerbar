import React from "react"
import styled from "styled-components"
import { theme } from "theme"

export default function NavBarLeftSide() {
  return (
    <NavBarLeftSideStyled onClick={() => window.location.reload()}>
      <img src="burger-icon.png" alt="burger-icon" />
      <h1>Burger Bar</h1>
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
    height: 80%;
    object-fit: contain;
    object-position: center;
  }
  h1 {
    /* border: 1px solid pink; */
    width: 100%;
    text-align: center;
    color: ${theme.colors.primary};
    margin-left: 10px;
    font-size: ${theme.fonts.P5};
    text-transform: uppercase;
    /* font-weight: ${theme.weights.heavy}; */
    font-family: "Black Han Sans", sans-serif;
    font-family: "Caveat Brush", cursive;
    font-family: "Coda Caption", sans-serif;
    font-family: "Dongle", sans-serif;
    font-family: "Gidugu", sans-serif;
    /* font-family: "Jua", sans-serif; */
    /* font-family: "Truculenta", sans-serif; */
    /* font-family: "Wendy One", sans-serif; */
  }
`
