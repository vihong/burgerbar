import React from "react"
import styled from "styled-components"
import { theme } from "theme"

interface PanelTabProps {
  isCollapsed: boolean
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}

export default function PanelTab({ isCollapsed, setIsCollapsed }: PanelTabProps) {
  return (
    <PanelTabStyled onClick={() => setIsCollapsed(!isCollapsed)}>
      <span>{isCollapsed ? "Ouvrir" : "Réduire"} le panel admin</span>
    </PanelTabStyled>
  )
}

const PanelTabStyled = styled.div`
  border: 1px solid ${theme.colors.white};
  position: absolute;
  top: -35px;
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

  :hover {
    cursor: pointer;
    background: ${theme.colors.white};
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    border-bottom: none;
  }

  button {
    border: none;
    margin-left: 10px;
    background: ${theme.colors.primary};
    font-weight: ${theme.weights.bold};
    color: ${theme.colors.white};
  }

  span {
    min-width: 120px;
  }
`
