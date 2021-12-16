import OrderContext from "context/OrderContext"
import { useContext } from "react"
import styled from "styled-components/macro"
import PanelWindow from "components/pages/Order/PanelAdmin/PanelWindow"
import PanelAdminTabs from "./PanelAdminTabs"

export default function PanelAdmin() {
  const { isCollapsed } = useContext(OrderContext)

  return (
    <PanelAdminStyled className="panel">
      <PanelAdminTabs />
      {!isCollapsed && <PanelWindow />}
    </PanelAdminStyled>
  )
}

const PanelAdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
`
