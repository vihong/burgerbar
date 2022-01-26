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
      {/* <div className="background-image">
        <img src="images/bg1.jpg" alt="bg1" />
      </div> */}
      <div className="logo">
        <img src="images/logo-burger-bicolor.png" alt="burger-icon" />
        <h1>Burger Live</h1>
      </div>
      <LoginForm />
      {/* <div className="form">
        <Link to="order">Commandes</Link>
        <Link to="/">Login</Link>
      </div> */}
    </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`
  border: 1px solid red;
  height: 100vh;
  /* background-color: ${theme.colors.black}; */
  background-image: url(/images/bg1.jpg);
  background-position: center;
  /* filter: blur(8px); */

  /* background-size: contain; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    /* border: 1px solid blue; */
    /* height: 300px; */
    /* display: flex; */
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
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
