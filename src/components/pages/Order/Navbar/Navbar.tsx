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
  height: 10vh;
  padding: 0px 20px;
  border-top-left-radius: ${theme.borderRadius.round};
  border-top-right-radius: ${theme.borderRadius.round};
  border-bottom: 1px solid ${theme.colors.greyLight};

  .icon {
    width: 30px;
    height: 30px;
  }
`
