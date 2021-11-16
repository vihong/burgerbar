import React from "react"
import Input from "components/atoms/Input"
import styled from "styled-components"

export default function Form() {
  return (
    <FormStyled>
      Form
      <Input />
    </FormStyled>
  )
}

const FormStyled = styled.form`
  border: 1px solid red;
`
