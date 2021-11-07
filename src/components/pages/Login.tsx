import { Link } from "@reach/router"
import React from "react"

interface LoginProps {
  path: string
}

export default function Login(props: LoginProps) {
  return (
    <div>
      <Link to="/">Commandes</Link>
      <Link to="login">Login</Link>
    </div>
  )
}
