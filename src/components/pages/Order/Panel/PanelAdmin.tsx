import OrderContext from "context/OrderContext"
import { useContext } from "react"
import styled from "styled-components/macro"
import WindowTab from "components/atoms/WindowTab"
import PanelWindow from "components/pages/order/Panel/PanelWindow"

export default function PanelAdmin() {
  const { isCollapsed, setIsCollapsed } = useContext(OrderContext)

  return (
    <PanelAdminStyled className="panel">
      <WindowTab isClosed={isCollapsed} onClick={() => setIsCollapsed(!isCollapsed)} />
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
