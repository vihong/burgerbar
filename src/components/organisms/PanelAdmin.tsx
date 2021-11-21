import OrderContext from "context/OrderContext"
import { useContext, useState } from "react"
import styled from "styled-components/macro"
import PanelTab from "./PanelTab"
import PanelWindow from "./PanelWindow"

export default function PanelAdmin() {
  const { isCollapsed, setIsCollapsed } = useContext(OrderContext)

  return (
    <PanelAdminStyled className="panel">
      <PanelTab isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
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
