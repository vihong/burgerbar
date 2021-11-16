import React from "react"
import Input from "components/atoms/Input"
import styled from "styled-components"

export default function Form() {
  return (
    <FormStyled>
      <h2>Panel administrateur</h2>
      <Input />
    </FormStyled>
  )
}

const FormStyled = styled.form`
  border: 1px solid red;
  min-height: 20vh;
  padding: 10px 30px;
`
