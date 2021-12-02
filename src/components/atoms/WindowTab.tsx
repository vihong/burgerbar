import React from "react"
import styled from "styled-components"
import { theme } from "theme"

interface PanelTabProps {
  label?: string
  IconComponent?: JSX.Element
  onClick?: any
  className?: string
}

export default function WindowTab({ label, IconComponent, onClick, className }: PanelTabProps) {
  return (
    <PanelTabStyled onClick={onClick} className={className}>
      {IconComponent}
      <span>{label}</span>
    </PanelTabStyled>
  )
}

const PanelTabStyled = styled.div`
  /* border: 1px solid ${theme.colors.incognito}; */
  color: ${theme.colors.white};
  display: inline-flex;
  align-items: center;
  height: 35px;
  border-radius: ${theme.borderRadius.round};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: ${theme.colors.background_white};
  padding: 0 16px;
  cursor: pointer;
`
