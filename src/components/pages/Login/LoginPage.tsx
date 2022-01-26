import { Link } from "@reach/router"
import React from "react"
import styled from "styled-components"
import { theme } from "theme"
import Navbar from "../Order/Navbar/Navbar"
import NavBarLeftSide from "../Order/Navbar/NavbarLeftSide"
import LoginForm from "./LoginForm"

interface LoginProps {
  path: string
}

export default function Login(props: LoginProps) {
  return (
    <LoginPageStyled>
      <div className="logo">
        <img src="images/logo-burger-bicolor.png" alt="burger-icon" />
        <h1>Burger Live</h1>
      </div>
      <LoginForm />
    </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`
  border: 1px solid red;
  height: 100vh;
  width: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    background-image: url(/images/bg1.jpg);
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  .logo {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: relative;
    img {
      width: 200px;
    }
    h1 {
      font-size: ${theme.fonts.P6};
      margin: 0;
      color: ${theme.colors.white};
      font-family: "Gidugu", sans-serif;
      text-transform: uppercase;
      line-height: 1em; // to bring h1 close together to logo
    }
  }
`
