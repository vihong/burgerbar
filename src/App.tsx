import { Router } from "@reach/router"
import Order from "./components/pages/order/Order"
import Login from "./components/pages/Login"

export default function App() {
  return (
    <Router>
      <Order path="/" />
      <Login path="/login" />
    </Router>
  )
}
