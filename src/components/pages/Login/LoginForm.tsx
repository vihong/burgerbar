import TextInput from "components/atoms/TextInput"
import { BsPersonCircle } from "react-icons/bs"
import styled from "styled-components"
import { theme } from "theme"

export default function LoginForm() {
  const handleSubmit = (event: any) => {
    event.preventDefault()
    alert("submitted")
  }

  return (
    <LoginFormStyled className="login-form" onSubmit={handleSubmit}>
      <h1>Bienvenue chez Burger Live !</h1>
      <hr />
      <p>Connectez-vous</p>
      {/* Add a TextInputForm.tsx specifically for LoginForm for now and then you'll refactor everything under one component */}
      <TextInput
        placeholder={"Entrez votre prénom"}
        IconComponent={
          <BsPersonCircle style={{ marginRight: 20, width: 20, height: 20, color: "grey" }} />
        }
      />
      <button type="submit">Accéder à mon espace</button>
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
  /* border: 1px solid red; */
  text-align: center;
  /* background: ${theme.colors.incognito}; */
  max-width: 500px;
  min-width: 200px;
  margin: 30px auto;
  padding: 2.5rem 2rem;
  /* box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2); */
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

  input,
  button {
    width: 100%;
    margin: 10px auto;

    &[type: = "text" ] {
      color: #1d1d1d;
      position: relative;
      bottom: 5px;
      text-align: left;
      padding-left: 10px;
      font-size: 18px;
    }
  }

  button {
    background: ${theme.colors.primary_burger};
    color: white;
    font-weight: ${theme.weights.bold};
    border-radius: ${theme.borderRadius.round};
    font-size: ${theme.fonts.P0};
    padding: 15px 10px;
    border: 1px solid ${theme.colors.primary_burger};
  }
`
