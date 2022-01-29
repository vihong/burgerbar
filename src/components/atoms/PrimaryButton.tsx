import React from "react"
import styled from "styled-components"
import { theme } from "theme"

interface PrimaryButtonProps {
  [x: string]: any
  IconComponent?: JSX.Element
}

export default function PrimaryButton({ IconComponent, ...restProps }: PrimaryButtonProps) {
  return (
    <PrimaryButtonStyled {...restProps}>
      <span>Accéder à mon espace</span>
      {IconComponent && <div className="icon">{IconComponent}</div>}
    </PrimaryButtonStyled>
  )
}

const PrimaryButtonStyled = styled.button`
  display: inline-flex;
  justify-content: center;
  position: relative; //is used in case you want to create interactive icons where an icon replaces the text label.
  white-space: nowrap; //prevents the text label from wrapping to the next line.
  text-decoration: none; //removes the text decoration in case you’re applying the .btn class to a link.
  line-height: 1;

  padding: 18px 24px;
  border-radius: ${theme.borderRadius.round};
  font-size: ${theme.fonts.P0};
  font-weight: ${theme.weights.heavy};
  color: ${theme.colors.white};
  background-color: ${theme.colors.primary_burger};
  border: 1px solid ${theme.colors.primary_burger};

  &:hover:not(:disabled) {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary_burger};
    border: 1px solid ${theme.colors.primary_burger};
    transition: all 200ms ease-out;
  }

  &:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary_burger};
    border: 1px solid ${theme.colors.primary_burger};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.P0};
    margin-left: 10px;
  }
`
