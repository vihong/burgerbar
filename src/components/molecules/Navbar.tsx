import React, { useContext } from "react"
import styled from "styled-components"
import { FaUserCircle } from "react-icons/fa"
import { FiLogOut } from "react-icons/fi"
import IconLabel from "components/atoms/IconLabel"
import { Link } from "@reach/router"
import { theme } from "theme/index"
import OrderContext from "components/context/OrderContext"
import Button from "components/atoms/Button"

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
  const { isModeAdmin, setIsModeAdmin } = useContext(OrderContext)

  const toggleButtonAdmin = () => {
    setIsModeAdmin(!isModeAdmin)
  }

  const buttonStyle = isModeAdmin
    ? {
        background: theme.colors.green,
        color: theme.colors.white,
      }
    : {}

  return (
    <NavBarRightSideStyled>
      <Button
        label={isModeAdmin ? "Quitter mode Admin" : "Activer mode Admin"}
        onClick={toggleButtonAdmin}
        style={buttonStyle}
      ></Button>
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
  width: auto;
  min-width: 250px;
  padding: 10px 20px;
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  .log-out-icon:visited {
    text-decoration: none;
  }
  button {
    border-radius: ${theme.borderRadius.round};
    margin-right: ${theme.gridUnit * 3};
    white-space: normal;
    max-width: 100px;
    :focus {
      border: 1px solid green;
    }
  }
`
