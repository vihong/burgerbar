import React, { useContext } from "react"
import OrderContext from "context/OrderContext"
import { FaShoppingCart, FaUserSecret } from "react-icons/fa"
import styled from "styled-components"
import { theme } from "theme"
import SwitchButton from "components/atoms/SwitchButton"
import Profile from "components/molecules/Profile"
import ToggleButton from "components/atoms/Buttons/ToggleButton"
import toast from "react-hot-toast"

export default function NavBarRightSide() {
  const { isModeAdmin, setIsModeAdmin } = useContext(OrderContext)

  const toggleButtonAdmin = () => {
    !isModeAdmin &&
      toast("Astuce : cliquez sur un produit pour le modifier", {
        position: "top-center",
        duration: 5000,
        style: {
          // borderRadius: theme.borderRadius.round,
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
          position: "relative",
          top: "8vh",
          right: "-550px",
          width: "250px",
        },
      })
    setIsModeAdmin(!isModeAdmin)
  }

  return (
    <NavBarRightSideStyled>
      {/* <SwitchButton
        isActive={isModeAdmin}
        toggleSwitchButton={toggleButtonAdmin}
        LeftIcon={<FaShoppingCart />}
        RightIcon={<FaUserSecret />}
      /> */}
      <ToggleButton isChecked={isModeAdmin} toggleIsChecked={toggleButtonAdmin} />
      <Profile name={"Arthur"} description={isModeAdmin ? "Admin" : "Client"} />
    </NavBarRightSideStyled>
  )
}

const NavBarRightSideStyled = styled.div`
  /* background: lightgreen; */
  width: auto;
  min-width: 380px;
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
