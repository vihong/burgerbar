import { Link } from "@reach/router"
import styled from "styled-components"
import { theme } from "theme"

interface NotFoundPageProps {
  default?: any
}

export default function NotFoundPage(props: NotFoundPageProps) {
  return (
    <NotFoundPageStyled>
      <h1 className="error-message">Erreur 404: page introuvable</h1>
      {/* replace this Link with <PrimaryButton/> wrapped in <Link/> */}
      <Link className="back-to-homepage" to="/">
        Revenir à l'écran principal
      </Link>
    </NotFoundPageStyled>
  )
}

const NotFoundPageStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &::before {
    /* background-color: red; */
    content: "";
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

  .error-message {
    font-size: ${theme.fonts.P6};
    color: ${theme.colors.white};
  }

  .back-to-homepage {
    font-size: ${theme.fonts.P0};
    color: ${theme.colors.white};
    background: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    border-radius: ${theme.borderRadius.round};
    padding: 1.5em 2em;
    text-decoration: none;
    font-weight: ${theme.weights.bold};
    &:hover {
      background: ${theme.colors.white};
      color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.white};
    }
  }
`
