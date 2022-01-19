import React, { useContext } from "react"
import { Link } from "@reach/router"
import IconLabel from "components/atoms/IconLabel"
import OrderContext from "context/OrderContext"
import toast from "react-hot-toast"
import { FaEye, FaHamburger, FaShoppingCart, FaUserCircle, FaUserSecret } from "react-icons/fa"
import { FiLogOut } from "react-icons/fi"
import styled from "styled-components"
import { theme } from "theme"
import SwitchButton from "components/atoms/SwitchButton"

export default function NavBarRightSide() {
  const { isModeAdmin, setIsModeAdmin } = useContext(OrderContext)

  const toggleButtonAdmin = () => {
    setIsModeAdmin(!isModeAdmin)
  }

  return (
    <NavBarRightSideStyled>
      <SwitchButton
        isActive={isModeAdmin}
        toggleSwitchButton={toggleButtonAdmin}
        LeftIcon={<FaShoppingCart />}
        RightIcon={<FaUserSecret />}
      />

      {/* <IconLabel IconComponent={<FaUserCircle className="icon" />} label="Arthur" /> */}
      {/* <Link to="login" className="log-out-icon">
        <IconLabel IconComponent={<FiLogOut className="icon" />} label="Log out" />
      </Link> */}
    </NavBarRightSideStyled>
  )
}

const NavBarRightSideStyled = styled.div`
  width: auto;
  min-width: 250px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;

  .log-out-icon:visited {
    text-decoration: none;
  }

  .enter-admin-mode {
    background-color: ${theme.colors.green};
    color: ${theme.colors.white};
  }

  .quit-admin-mode {
    background-color: ${theme.colors.redSecondary};
    color: ${theme.colors.white};
  }
`
