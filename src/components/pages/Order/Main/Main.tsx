import OrderContext from "context/OrderContext"
import React, { useContext } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import styled from "styled-components/macro"
import Basket from "./Basket/Basket"
import Menu from "./Menu"
import PanelAdmin from "./PanelAdmin/PanelAdmin"

export default function Main() {
  const { isModeAdmin } = useContext(OrderContext)
  return (
    <MainStyled>
      <Basket />
      <div className="menu-and-panel-container">
        <Menu />
        {isModeAdmin && (
          <TransitionGroup>
            <CSSTransition timeout={500} classNames="panel" appear={isModeAdmin}>
              <PanelAdmin />
            </CSSTransition>
          </TransitionGroup>
        )}
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
    box-shadow: 0 0px 4px 0 rgb(0 0 0 / 20%) inset;
  }
  .menu-and-panel-container {
    position: relative;
    height: calc(95vh - 10vh);
    display: flex;
    box-shadow: 0 0 8px 0 rgb(0 0 0 / 20%) inset;

    // menu
    > div:first-child {
      /* border: 3px solid red; */
    }

    .panel-appear {
      opacity: 0.1;
      transform: translateY(100%);
      &.panel-appear-active {
        opacity: 1;
        transform: translateY(0);
        transition: all 500ms;
      }
    }
  }
`
