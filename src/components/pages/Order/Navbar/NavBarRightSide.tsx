import React, { useContext } from "react"
import OrderContext from "context/OrderContext"
import { FaShoppingCart, FaUserSecret } from "react-icons/fa"
import styled from "styled-components"
import { theme } from "theme"
import SwitchButton from "components/atoms/SwitchButton"
import Profile from "components/molecules/Profile"

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
      <Profile name={"Arthur"} description={"Se déconnecter"} />
      {/* <IconLabel IconComponent={<FaUserCircle className="icon" />} label="Arthur" /> */}
      {/* <Link to="login" className="log-out-icon">
        <IconLabel IconComponent={<FiLogOut className="icon" />} label="Log out" />
      </Link> */}
    </NavBarRightSideStyled>
  )
}

const NavBarRightSideStyled = styled.div`
  /* background: lightgreen; */
  width: auto;
  min-width: 300px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

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
