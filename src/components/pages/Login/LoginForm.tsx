import { navigate } from "@reach/router"
import { useState } from "react"
import { BsPersonCircle } from "react-icons/bs"
import styled from "styled-components"
import { theme } from "theme"
import TextInput from "components/atoms/TextInputLogin"
import PrimaryButton from "components/atoms/PrimaryButton"
import { IoChevronForward } from "react-icons/io5"

export default function LoginForm() {
  const [username, setUsername] = useState("")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    event.currentTarget.reset()
    navigate(`/order/${username}`)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  return (
    <LoginFormStyled className="login-form" onSubmit={handleSubmit}>
      <h1>Bienvenue chez Burger Live !</h1>
      <hr />
      <p>Connectez-vous</p>
      {/* Add a TextInputForm.tsx specifically for LoginForm for now and then you'll refactor everything under one component */}
      <TextInput
        placeholder={"Entrez votre prénom"}
        IconComponent={<BsPersonCircle className="icon" />}
        value={username}
        onChange={handleChange}
        required
      />
      <PrimaryButton label IconComponent={<IoChevronForward />} />
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
  /* border: 1px solid red; */
  /* background: ${theme.colors.incognito}; */
  /* box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2); */
  text-align: center;
  max-width: 500px;
  min-width: 200px;
  margin: 30px auto;
  padding: 2.5rem 2rem;
  border-radius: 5px;
  hr {
    border: 1.5px solid #f56a2c;
    margin-bottom: 40px;
  }

  h1 {
    color: white;
    font-size: ${theme.fonts.P4};
  }
  p {
    color: #8e8b8b;
    margin: 20px 10px 10px;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P3};
  }

  button {
    width: 100%;
  }
`
