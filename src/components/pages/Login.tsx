import { Link } from "@reach/router"
import React from "react"
import styled from "styled-components"
import Navbar from "./Order/Navbar/Navbar"

interface LoginProps {
  path: string
}

export default function Login(props: LoginProps) {
  return (
    <LoginStyled>
      {/* <div className="form">
        <Link to="order">Commandes</Link>
        <Link to="/">Login</Link>
      </div> */}
    </LoginStyled>
  )
}

const LoginStyled = styled.div`
  border: 1px solid red;
  height: 100vh;
  background-color: pink;
  /* background-image: url(/images/bg1.jpg); */
  /* background-position: center; */
  /* background-size: contain; */

  container {
    height: 100vh;
    width: 100%;
    .form {
      border: 1px solid blue;
    }
  }
`
