import OrderContext from "context/OrderContext"
import { useContext } from "react"
import styled from "styled-components/macro"
import PanelTab from "components/atoms/PanelTab"
import PanelWindow from "./PanelWindow"

export default function PanelAdmin() {
  const { isCollapsed, setIsCollapsed } = useContext(OrderContext)

  return (
    <PanelAdminStyled className="panel">
      <PanelTab isClosed={isCollapsed} onClick={() => setIsCollapsed(!isCollapsed)} />
      {!isCollapsed && <PanelWindow />}
    </PanelAdminStyled>
  )
}

const PanelAdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`
