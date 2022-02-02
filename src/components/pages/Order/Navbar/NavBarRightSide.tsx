import React, { useContext } from "react"
import OrderContext from "context/OrderContext"
import styled from "styled-components"
import Profile from "components/molecules/Profile"
import ToggleButton from "components/atoms/Buttons/ToggleButton"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { theme } from "theme"

export default function NavBarRightSide() {
  const { isModeAdmin, setIsModeAdmin, name } = useContext(OrderContext)

  const toggleButtonAdmin = () => {
    if (!isModeAdmin)
      toast.info("Astuce : cliquer sur un produit pour le modifier", {
        // icon: <FaUserSecret size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    setIsModeAdmin(!isModeAdmin)
  }

  return (
    <NavBarRightSideStyled>
      <ToggleButton isChecked={isModeAdmin} toggleIsChecked={toggleButtonAdmin} />
      <Profile name={name} description={"Se déconnecter"} />
      <ToastContainer className="toaster" bodyClassName="body-toast" />
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

  .toaster {
    /* border: 1px solid red; */
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_black};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`
