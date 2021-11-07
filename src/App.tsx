import logo from "./logo.svg"
import "./App.css"
import { useState } from "react"
import { Router } from "@reach/router"
import Order from "./components/pages/Order"
import Login from "./components/pages/Login"

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Order path="/" />
      <Login path="/login" />
    </Router>
  )
}
