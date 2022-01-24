import React from "react"
import styled from "styled-components"
import { theme } from "theme"

interface ToggleButtonProps {
  isChecked: boolean
  toggleIsChecked: any
}

export default function ToggleButton({ isChecked, toggleIsChecked }: ToggleButtonProps) {
  return (
    <ToggleButtonStyled>
      <input
        type="checkbox"
        className="toggle"
        id="rounded"
        checked={isChecked}
        onChange={toggleIsChecked}
      />
      <label
        htmlFor="rounded"
        className="rounded"
        data-checked="Mode admin Activé"
        data-unchecked="Mode admin Désactivé"
      ></label>
    </ToggleButtonStyled>
  )
}

const ToggleButtonStyled = styled.div`
  /* border: 1px solid red; */

  display: flex;
  input[type="checkbox"] {
    // Hides the square box but keeps the core "toggle functionality"
    &.toggle {
      display: none;
    }

    &.toggle + label {
      display: inline-block;
      height: 40px;
      width: 200px;
      position: relative;
      font-size: ${theme.fonts.XXS};
      border: 2px solid ${theme.colors.black};
      padding: 0;
      margin: 0;
      cursor: pointer;
      box-sizing: border-box;
      transition: all 500ms ease;
    }

    // the small round circle
    &.toggle + label:before {
      content: "";
      position: absolute;
      top: 3px;
      height: 30px;
      width: 30px;
      transition: all 500ms ease;
      z-index: 3;
    }

    // text inside the switch button (for checked and unchecked)
    &.toggle + label:after {
      /* border: 1px solid blue; */
      width: 150px;
      text-align: center;
      z-index: 2;
      text-transform: uppercase;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      text-overflow: ellipsis;
      overflow: hidden;
    }

    // outside box
    &.toggle + label.rounded {
      border-radius: 30px;
    }

    // small circle
    &.toggle + label.rounded:before {
      border-radius: 50%;
    }

    &.toggle:not(:checked) + label {
      background-color: transparent;
      /* text-align: right; */
    }

    // text label when not checked
    &.toggle:not(:checked) + label:after {
      content: attr(data-unchecked);
      right: 8px;
      left: auto;
      opacity: 1;
      color: black;
    }

    // small circle when not checked
    &.toggle:not(:checked) + label:before {
      left: 3px;
      background-color: ${theme.colors.black};
    }

    // box container when checked
    &.toggle:checked + label {
      text-align: left;
      border-color: ${theme.colors.primary};
    }

    // label text when checked
    &.toggle:checked + label:after {
      content: attr(data-checked);
      left: 4px;
      right: auto;
      opacity: 1;
      color: ${theme.colors.black};
    }

    // small circle when checked
    &.toggle:checked + label:before {
      left: 163px;
      background-color: ${theme.colors.primary};
    }
  }
`
