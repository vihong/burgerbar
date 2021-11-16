import React, { useState } from "react"
import OrderContext from "context/OrderContext"
import Navbar from "components/molecules/Navbar"
import Menu from "components/organisms/Menu"
import styled from "styled-components"
import PanelAdmin from "components/organisms/PanelAdmin"

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
        {isModeAdmin && <PanelAdmin />}
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
