import { Link } from "@reach/router"
import React from "react"

interface OrderProps {
  path: string
}

export default function Orders(props: OrderProps) {
  return (
    <>
      <Link to="/">Commandes</Link>
      <Link to="login">Login</Link>
    </>
  )
}
