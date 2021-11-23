import React from "react"
import styled from "styled-components/macro"

export default function Main() {
  return (
    <MainStyled>
      <div className="sidebar">SideBar</div>
      <div className="menu-container">
        <div className="menu">Menu</div>
        <div className="panel-admin">Panel Admin</div>
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
    display: grid;
    grid-template-rows: 75% 25%;

    .menu {
      background: blue;
      /* grid-row: 1/ 5; */
    }
    .panel-admin {
      background: lightgrey;
      /* grid-row: 5/6; */
    }
  }
`
