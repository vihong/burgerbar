import { Router } from "@reach/router"
import Order from "components/pages/Order/Order"
import Login from "components/pages/Login"

export default function App() {
  return (
    <Router>
      <Login path="/" />
      <Order path="/order" />
    </Router>
  )
}
