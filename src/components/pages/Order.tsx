import { Link } from "@reach/router"
import Navbar from "components/molecules/Navbar"
import Menu from "components/organisms/Menu"
import React from "react"

interface OrderProps {
  path: string
}

export default function Orders(props: OrderProps) {
  return (
    <>
      <Navbar />
      <Menu />
    </>
  )
}
