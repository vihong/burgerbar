import { Link } from "@reach/router"
import React from "react"
import Navbar from "../molecules/Navbar"

interface OrderProps {
  path: string
}

export default function Orders(props: OrderProps) {
  return (
    <>
      <Navbar />
    </>
  )
}
