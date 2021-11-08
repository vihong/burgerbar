import React from "react"
import styled from "styled-components"
import { FaUserCircle } from "react-icons/fa"
import { FiLogOut } from "react-icons/fi"
import IconLabel from "components/atoms/IconLabel"
import { Link } from "@reach/router"
import { theme } from "theme/index"

export default function Navbar() {
  return (
    <NavbarStyled>
      <NavBarLeftSide />
      <NavBarRightSide />
    </NavbarStyled>
  )
}

function NavBarLeftSide() {
  return <h2>Burger Bar</h2>
}

function NavBarRightSide() {
  return (
    <NavBarRightSideStyled>
      <IconLabel IconComponent={<FaUserCircle className="icon" />} label="Arthur" />
      <Link to="login" className="log-out-icon">
        <IconLabel IconComponent={<FiLogOut className="icon" />} label="Log out" />
      </Link>
    </NavBarRightSideStyled>
  )
}

const NavbarStyled = styled.nav`
  color: ${theme.colors.black};
  border: 1px solid red;
  background-color: ${theme.colors.primary};
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

const NavBarRightSideStyled = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
  .log-out-icon:visited {
    text-decoration: none;
  }
`
