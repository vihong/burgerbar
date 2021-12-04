import React from "react"
import styled from "styled-components"
import { theme } from "theme"
import { ID } from "typescript/AtomicType"

interface SelectOption {
  id: ID
  label: string
  value: any
}

interface SelectInputProps {
  options: SelectOption[]
  IconComponent?: JSX.Element
}

export default function SelectInput({ options, IconComponent }: SelectInputProps) {
  return (
    <SelectInputStyled>
      {IconComponent && IconComponent}
      <select>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </SelectInputStyled>
  )
}

const SelectInputStyled = styled.div`
  /* border: 1px solid yellow; */
  background-color: ${theme.colors.background_white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 8px 16px;

  .icon {
    font-size: ${theme.fonts.P1};
    margin-right: ${theme.gridUnit * 1.6}px;
    color: ${theme.colors.greySemiDark};
    min-width: 1em;
  }

  select {
    border: 1px solid blue;
    background: ${theme.colors.background_white};
    border: none;
    font-size: ${theme.fonts.P0};
    color: ${theme.colors.black};
    width: 100%;
    appearance: none;
    outline: 0;
  }
`
