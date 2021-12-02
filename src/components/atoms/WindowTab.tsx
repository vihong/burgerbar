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
  border: 1px solid ${theme.colors.incognito};
  position: absolute;
  top: -36px;
  background: ${theme.colors.incognito};
  color: ${theme.colors.white};
  display: inline-flex;
  align-items: center;
  margin-left: 60px;
  min-height: 35px;
  border-radius: ${theme.borderRadius.round};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: ${theme.colors.background_white};
  min-width: 100px;
  padding-left: 0.5em;
  padding-right: 0.4em;

  :hover {
    cursor: pointer;
    background: ${theme.colors.white};
    color: ${theme.colors.incognito};
    border: 1px solid ${theme.colors.greyLight};
    border-bottom: none;
  }

  span {
    margin: auto;
  }

  .icon {
    min-width: 1.5em;
    min-height: 1.5em;
  }
`
