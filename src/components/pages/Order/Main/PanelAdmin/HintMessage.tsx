import React from "react"
import styled from "styled-components"
import { theme } from "theme"
import { fadeIn } from "theme/animations"
import { HiCursorClick } from "react-icons/hi"

export default function HintMessage() {
  return (
    <HintMessageStyled>
      <span>Cliquer sur un produit du menu pour le modifier</span>
      <HiCursorClick />
    </HintMessageStyled>
  )
}

const HintMessageStyled = styled.div`
  width: 50%;
  height: 100%;
  animation: ${fadeIn} 1000ms;
  font-size: ${theme.fonts.P0};
  display: flex;
  position: relative;
  top: 50px;
  span {
    margin-right: 10px;
  }
`
