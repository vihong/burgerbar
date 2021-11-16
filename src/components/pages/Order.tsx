import React, { useState } from "react"
import OrderContext from "context/OrderContext"
import Navbar from "components/molecules/Navbar"
import Menu from "components/organisms/Menu"
import Form from "components/organisms/Form"
import styled from "styled-components"

interface OrderProps {
  path: string
}

export default function Orders(props: OrderProps) {
  const [isModeAdmin, setIsModeAdmin] = useState(true)

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
  }

  return (
    <OrderStyled>
      <OrderContext.Provider value={orderContextValue}>
        <Navbar />
        <Menu />
        {isModeAdmin && <Form />}
      </OrderContext.Provider>
    </OrderStyled>
  )
}

const OrderStyled = styled.div`
  border: 2px solid green;
  display: flex;
  flex-direction: column;
  height: 100vh;
`
