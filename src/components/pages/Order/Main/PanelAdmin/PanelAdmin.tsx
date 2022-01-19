import OrderContext from "context/OrderContext"
import { useContext } from "react"
import styled from "styled-components/macro"
import PanelWindow from "components/pages/Order/Main/PanelAdmin/PanelWindow"
import PanelAdminTabs from "./PanelAdminTabs"
import { CSSTransition, TransitionGroup } from "react-transition-group"

export default function PanelAdmin() {
  const { isCollapsed, isModeAdmin } = useContext(OrderContext)

  return (
    <TransitionGroup component={PanelAdminStyled}>
      <CSSTransition timeout={500} appear={isModeAdmin} classNames="panel">
        <div>
          <PanelAdminTabs />
          {!isCollapsed && <PanelWindow />}
        </div>
      </CSSTransition>
    </TransitionGroup>
  )
}

const PanelAdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;

  .panel-appear {
    opacity: 0.1;
    transform: translateY(100%);
    &.panel-appear-active {
      opacity: 1;
      transform: translateY(0);
      transition: all 500ms;
    }
  }
`
