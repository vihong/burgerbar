import React from "react"
import styled from "styled-components"
import { theme } from "theme"
import { ID } from "typescript/AtomicType"

interface SelectOption {
  id: ID
  label: string
  value: any
  [x: string]: any
}

interface SelectInputProps {
  options: SelectOption[]
  IconComponent?: JSX.Element
  onChange?: any // @TODO: remove "?"
  name?: string
  value?: any
}

export default function SelectInput({
  value,
  name,
  options,
  IconComponent,
  onChange,
}: SelectInputProps) {
  console.log("name, value: ", name, value)
  return (
    <SelectInputStyled>
      {IconComponent && IconComponent}
      <select onChange={onChange} name={name} value={value}>
        {options.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
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
    outline: 0;
  }
`
