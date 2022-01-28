import { Router } from "@reach/router"
import Order from "components/pages/Order/Order"
import LoginPage from "components/pages/Login/LoginPage"
import NotFoundPage from "components/pages/NotFound/NotFoundPage"

export default function App() {
  return (
    <Router>
      <LoginPage path="/" />
      <Order path="/order/:name" />
      <NotFoundPage default />
    </Router>
  )
}
