import React from "react"
import Input from "components/atoms/Input"
import styled from "styled-components"
import Button from "components/atoms/Button"

export default function Form() {
  return (
    <FormStyled>
      <h2>Panel administrateur</h2>
      <button onClick={(e) => e.preventDefault()}>Add a client</button>
      <br />
      <form action="submit">
        <Input />
      </form>
    </FormStyled>
  )
}

const FormStyled = styled.div`
  border: 1px solid red;
  min-height: 20vh;
  padding: 10px 30px;
`
