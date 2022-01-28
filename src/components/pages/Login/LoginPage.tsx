import React from "react"
import styled from "styled-components"
import { theme } from "theme"
import LoginForm from "./LoginForm"
import Logo from "./Logo/Logo"

interface LoginProps {
  path: string
}

export default function Login(props: LoginProps) {
  return (
    <LoginPageStyled>
      <Logo />
      <LoginForm />
    </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`
  height: 100vh;
  width: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    background: pink;
    background: url(/images/bg1.jpg) rgba(0, 0, 0, 0.7);
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
`
