import React from "react"
import styled from "styled-components"

export default function Input() {
  return (
    <InputStyled>
      <input type="text" placeholder="pokemon" />
    </InputStyled>
  )
}

const InputStyled = styled.div`
  border: 1px solid blue;
  display: inline;
`
