import React from "react"
import { FiChevronUp, FiChevronDown } from "react-icons/fi"
import styled from "styled-components"
import { theme } from "theme"

interface PanelTabProps {
  isClosed?: boolean
  onClick?: any
}

export default function WindowTab({ isClosed, onClick }: PanelTabProps) {
  return (
    <PanelTabStyled onClick={onClick}>
      {isClosed ? <FiChevronUp className="icon" /> : <FiChevronDown className="icon" />}
      <span>{isClosed ? "Ouvrir" : "Réduire"}</span>
    </PanelTabStyled>
  )
}

const PanelTabStyled = styled.div`
  border: 1px solid ${theme.colors.white};
  position: absolute;
  top: -31px;
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
  min-width: 30px;
  padding-left: 5px;

  :hover {
    cursor: pointer;
    background: ${theme.colors.white};
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.greyLight};
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
    margin: 0 12px 0 5px;
  }

  .icon {
    min-width: 1.5em;
    min-height: 1.5em;
  }
`
