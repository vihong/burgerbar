import React, { useContext } from "react"
import styled from "styled-components/macro"
import { FaUserCircle } from "react-icons/fa"
import { FiLogOut } from "react-icons/fi"
import IconLabel from "components/atoms/IconLabel"
import { Link } from "@reach/router"
import { theme } from "theme/index"
import OrderContext from "context/OrderContext"
import Button from "components/atoms/Button"
import toast from "react-hot-toast"
import { FaUserSecret } from "react-icons/fa"

export default function Navbar() {
  return (
    <NavbarStyled>
      <NavBarLeftSide />
      <NavBarRightSide />
    </NavbarStyled>
  )
}

function NavBarLeftSide() {
  return (
    <NavBarLeftSideStyled>
      <img src="burger-icon.png" alt="burger-icon" />
      <h2>Burger Bar</h2>
    </NavBarLeftSideStyled>
  )
}

const NavBarLeftSideStyled = styled.div`
  /* border: 1px solid red; */
  height: 100%;
  width: 210px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    /* border: 1px solid green; */
    height: 80%;
    object-fit: contain;
    object-position: center;
  }
  h2 {
    /* border: 1px solid pink; */
    width: 100%;
    text-align: center;
    color: ${theme.colors.primary};
  }
`

function NavBarRightSide() {
  const { isModeAdmin, setIsModeAdmin } = useContext(OrderContext)

  const toggleButtonAdmin = () => {
    !isModeAdmin &&
      toast.success("Mode Admin activé!", {
        position: "top-center",
        duration: 3000,
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
        icon: <FaUserSecret />,
      })
    setIsModeAdmin(!isModeAdmin)
  }

  return (
    <NavBarRightSideStyled>
      <Button
        label={isModeAdmin ? "Quitter mode Admin" : "Activer mode Admin"}
        onClick={toggleButtonAdmin}
        // className={!isModeAdmin ? "enter-admin-mode" : "quit-admin-mode"}
      />
      <IconLabel IconComponent={<FaUserCircle className="icon" />} label="Arthur" />
      <Link to="login" className="log-out-icon">
        <IconLabel IconComponent={<FiLogOut className="icon" />} label="Log out" />
      </Link>
    </NavBarRightSideStyled>
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
