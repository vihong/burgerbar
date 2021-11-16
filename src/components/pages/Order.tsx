import React, { useState } from "react"
import OrderContext from "context/OrderContext"
import Navbar from "components/molecules/Navbar"
import Menu from "components/organisms/Menu"
import Form from "components/organisms/Form"

interface OrderProps {
  path: string
}

export default function Orders(props: OrderProps) {
  const [isModeAdmin, setIsModeAdmin] = useState(false)

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
  }

  return (
    <>
      <OrderContext.Provider value={orderContextValue}>
        <Navbar />
        <Menu />
        {isModeAdmin && <Form />}
      </OrderContext.Provider>
    </>
  )
}
