import OrderContext from "context/OrderContext"
import React, { useContext } from "react"
import styled from "styled-components/macro"
import { theme } from "theme"
import Basket from "./Basket"
import Menu from "./Menu"
import PanelAdmin from "./PanelAdmin/PanelAdmin"

export default function Main() {
  const { isModeAdmin } = useContext(OrderContext)
  return (
    <MainStyled>
      <Basket />
      <div className="menu-container">
        <Menu />
        {isModeAdmin && <PanelAdmin />}
      </div>
    </MainStyled>
  )
}

const MainStyled = styled.div`
  /* background: pink; */
  flex: 1;
  display: grid;
  grid-template-columns: 25% 1fr;

  .sidebar {
    /* background: green; */
  }
  .menu-container {
    /* background: red; */
    position: relative;
    height: 92vh;
    display: flex;

    // menu
    > div:first-child {
      border-left: 1px solid ${theme.colors.greyLight};
      overflow-y: scroll;
      display: flex;
      justify-content: space-evenly;
    }

    // panel-admin
    > div:nth-child(2) {
      /* border: 3px solid blue; */
    }
  }
`
