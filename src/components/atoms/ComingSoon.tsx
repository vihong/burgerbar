import styled from "styled-components"
import { theme } from "theme"

export default function ComingSoon() {
  return <ComingSoonStyled>ComingSoon</ComingSoonStyled>
}

const ComingSoonStyled = styled.h2`
  font-family: "Caveat Brush", cursive;
  font-size: ${theme.fonts.P5};
  transform: rotate(10deg);
  color: ${theme.colors.redSecondary};
`
