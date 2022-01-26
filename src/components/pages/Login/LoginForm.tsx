import styled from "styled-components"
import { theme } from "theme"

export default function LoginForm() {
  return (
    <LoginFormStyled>
      <form action="" className="login-form" onSubmit={() => console.log("login")}>
        <p>Connexion</p>
        <hr />
        <p>Bienvenu chez Burger Live!</p>
        <input type="text" required placeholder="Entrez votre prénom..." />
        <button type="submit">Accéder à mon espace</button>
      </form>
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
  /* border: 1px solid red; */
  text-align: center;
  background: ${theme.colors.incognito};
  max-width: 500px;
  min-width: 200px;
  margin: 30px auto;
  padding: 3.5rem 2rem;
  box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
  border-radius: 5px;
  hr {
    border: 1.5px solid #f56a2c;
    margin-bottom: 40px;
  }

  p {
    color: #8e8b8b;
    margin: 20px 10px 10px;
    color: ${theme.colors.white};
  }

  input,
  button {
    width: 100%;
    border: -radius 5px;
    border: 1px solid #d3d3d3;
    height: 35px;
    margin: 5px auto;
    background: snow;
    &[type: = "text" ] {
      color: #1d1d1d;
      position: relative;
      bottom: 5px;
      text: -align left;
      padding: -left 10px;
      font: -size 18px;
    }
  }
`
