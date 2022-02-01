import React, { useContext } from "react"
import OrderContext from "context/OrderContext"
import styled from "styled-components"
import { theme } from "theme"
import Profile from "components/molecules/Profile"
import ToggleButton from "components/atoms/Buttons/ToggleButton"
import toast from "react-hot-toast"

export default function NavBarRightSide() {
  const { isModeAdmin, setIsModeAdmin, name } = useContext(OrderContext)

  const toggleButtonAdmin = () => {
    !isModeAdmin &&
      toast("Astuce : cliquez sur un produit pour le modifier", {
        position: "top-center",
        duration: 5000,
        style: {
          borderRadius: theme.borderRadius.round,
          background: theme.colors.black,
          color: "#fff",
          position: "relative",
          top: "12vh",
          right: "-550px",
          width: "250px",
        },
      })
    setIsModeAdmin(!isModeAdmin)
  }

  return (
    <NavBarRightSideStyled>
      <ToggleButton isChecked={isModeAdmin} toggleIsChecked={toggleButtonAdmin} />
      <Profile name={name} description={"Se déconnecter"} />
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
`
