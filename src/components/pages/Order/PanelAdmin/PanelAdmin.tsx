import OrderContext from "context/OrderContext"
import { useContext } from "react"
import styled from "styled-components/macro"
import WindowTab from "components/atoms/WindowTab"
import PanelWindow from "components/pages/Order/PanelAdmin/PanelWindow"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { theme } from "theme"

export default function PanelAdmin() {
  const { isCollapsed, setIsCollapsed } = useContext(OrderContext)

  return (
    <PanelAdminStyled className="panel">
      <div className="panel-tabs">
        <WindowTab
          isClosed={isCollapsed}
          labelOnOpened="Réduire"
          IconComponentOnOpened={<FiChevronDown className="icon" />}
          labelOnClosed="Ouvrir"
          IconComponentOnClosed={<FiChevronUp className="icon" />}
          onClick={() => setIsCollapsed(!isCollapsed)}
        />
      </div>
      {!isCollapsed && <PanelWindow />}
    </PanelAdminStyled>
  )
}

const PanelAdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  .panel-tabs {
    position: absolute;
    top: -36px;
    /* border: 1px solid red; */
  }
`
