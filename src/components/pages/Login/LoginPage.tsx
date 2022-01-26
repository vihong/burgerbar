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
        <div className="logo-png">
          <img src="images/logo-burger-bicolor.png" alt="burger-icon" />
        </div>
        <h1>Burger Live</h1>
      </div>
      <LoginForm />
    </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`
  /* border: 1px solid red; */
  height: 100vh;
  width: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &::before {
    /* background-color: red; */
    content: "";
    background: url(/images/bg1.jpg) rgba(0, 0, 0, 0.4);
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  .logo {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .logo-png {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 150px;
      }
    }
    h1 {
      font-size: ${theme.fonts.P5};
      margin: 0;
      color: ${theme.colors.white};
      font-family: "Gidugu", sans-serif;
      text-transform: uppercase;
      line-height: 1.3em; // to bring h1 close together to logo
      text-align: center;
    }
  }
`
