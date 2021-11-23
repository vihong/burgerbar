import OrderContext from "context/OrderContext"
import React, { useContext } from "react"
import styled from "styled-components/macro"
import Menu from "./Menu"
import PanelAdmin from "./PanelAdmin/PanelAdmin"

export default function Main() {
  const { isModeAdmin } = useContext(OrderContext)
  return (
    <MainStyled>
      <div className="sidebar">SideBar</div>
      <div className="menu-container">
        <Menu />
        {isModeAdmin && <PanelAdmin />}
      </div>
    </MainStyled>
  )
}

const MainStyled = styled.div`
  background: pink;
  flex: 1;
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;

  .sidebar {
    background: green;
    grid-column: 1/2;
  }
  .menu-container {
    background: red;
    grid-column: 2/6;
    position: relative;
    height: 92vh;
    display: flex;

    > div:first-child {
      border: 3px solid red;
      overflow-y: scroll;
    }
    > div:nth-child(2) {
      border: 3px solid blue;
    }
  }
`
