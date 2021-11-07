import React from "react"
import styled from "styled-components"
import { FaUserCircle } from "react-icons/fa"
import { FiLogOut } from "react-icons/fi"
import IconLabel from "../atoms/IconLabel"
import { Link } from "@reach/router"

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
      <Link to="login">
        <IconLabel IconComponent={<FiLogOut className="icon" />} label="Log out" />
      </Link>
    </NavBarRightSideStyled>
  )
}

const NavbarStyled = styled.nav`
  border: 1px solid red;
  background: orange;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
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
`
