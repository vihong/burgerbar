import React from "react"
import styled from "styled-components/macro"
import { theme } from "theme/index"
import NavBarLeftSide from "./NavbarLeftSide"
import NavBarRightSide from "./NavBarRightSide"

export default function Navbar() {
  return (
    <NavbarStyled>
      <NavBarLeftSide />
      <NavBarRightSide />
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
  /* border: 1px solid blue; */
  color: ${theme.colors.black};
  background-color: ${theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 8vh;
  padding: 0px 20px;
  .icon {
    width: 30px;
    height: 30px;
  }
`
