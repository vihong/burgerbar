import { Router } from "@reach/router"
import Order from "components/pages/Order/Order"
import LoginPage from "components/pages/LoginPage/LoginPagePage"

export default function App() {
  return (
    <Router>
      <LoginPage path="/" />
      <Order path="/order" />
    </Router>
  )
}
