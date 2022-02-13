import { navigate } from "@reach/router"
import { useState } from "react"
import { BsPersonCircle } from "react-icons/bs"
import styled from "styled-components"
import { theme } from "theme"
import TextInput from "components/atoms/TextInputLogin"
import PrimaryButton from "components/atoms/PrimaryButton"
import { IoChevronForward } from "react-icons/io5"
import { createNewUser, getOneUserFromFirebase } from "api/helpers"

export default function LoginForm() {
  const [username, setUsername] = useState("")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    /**je demande le user. Deux possibilités :
     * 1) le user exist
     * Dans ce cas, je retrieve le user et ses infos et je les utilise pour peupler la page d'après.
     * 2) le user n'existe pas
     * Dans ce cas, je le créé avec des infos de bases que j'utilise direct après pour passer à l'écran d'après puisque je les ai déjà.
     */
    const userRetrieved = await getOneUserFromFirebase(username)
    if (!userRetrieved) createNewUser(username)
    navigate(`/order/${username}`)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  return (
    <LoginFormStyled className="login-form" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez-vous</h2>
      {/* Add a TextInputForm.tsx specifically for LoginForm for now and then you'll refactor everything under one component */}
      <TextInput
        placeholder={"Entrez votre prénom"}
        IconComponent={<BsPersonCircle className="icon" style={{ color: theme.colors.greyBlue }} />}
        value={username}
        onChange={handleChange}
        required
      />
      <PrimaryButton label="Accéder à mon espace" IconComponent={<IoChevronForward />} />
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 2.5rem 2rem;
  border-radius: 5px;
  font-family: "Amatic SC", cursive;

  hr {
    border: 1.5px solid #f56a2c;
    margin-bottom: 40px;
  }

  h1 {
    color: white;
    font-size: ${theme.fonts.P5};
  }
  h2 {
    color: #8e8b8b;
    margin: 20px 10px 10px;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P4};
  }

  button {
    width: 100%;
  }
`
