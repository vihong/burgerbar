import OrderContext from "context/OrderContext"
import { useContext, useState } from "react"
import styled from "styled-components/macro"
import { theme } from "theme"

import PanelForms from "./PanelForms"

export default function PanelAdmin() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <PanelAdminStyled className="panel">
      <div className="panel-tab" onClick={() => setIsCollapsed(!isCollapsed)}>
        <span>{isCollapsed ? "Ouvrir" : "Réduire"} le panel admin</span>
      </div>
      {!isCollapsed && <PanelForms />}
    </PanelAdminStyled>
  )
}

const PanelAdminStyled = styled.div`
  /* border: 1px solid red; */
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  .panel-tab {
    /* border: 1px solid blue; */
    position: absolute;
    top: -34px;
    padding: 2px 10px;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    display: inline-flex;
    align-items: center;
    margin-left: 60px;
    min-height: 30px;
    border-radius: ${theme.borderRadius.round};
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: ${theme.colors.background_white};

    button {
      border: none;
      margin-left: 10px;
      background: ${theme.colors.primary};
      font-weight: ${theme.weights.bold};
      color: ${theme.colors.white};
    }

    span {
      /* border: 1px solid green; */
      min-width: 120px;
    }
  }

  .outside-button {
  }
`
