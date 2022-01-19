import { hkdfSync } from "crypto"
import React from "react"
import styled from "styled-components"
import { theme } from "theme"

interface SwitchButtonProps {
  isActive: boolean
  toggleSwitchButton: any
  RightIcon: any
  LeftIcon: any
}

export default function SwitchButton({
  isActive,
  toggleSwitchButton,
  RightIcon,
  LeftIcon,
}: SwitchButtonProps) {
  let leftIconClassName = "on-icon"
  let rightIconClassName = "off-icon"

  leftIconClassName += isActive ? " not-activated" : " activated"
  rightIconClassName += isActive ? " activated" : " not-activated"

  return (
    <SwitchButtonStyled>
      <div onClick={toggleSwitchButton} className={leftIconClassName}>
        {LeftIcon}
      </div>
      <div onClick={toggleSwitchButton} className={rightIconClassName}>
        {RightIcon}
      </div>
    </SwitchButtonStyled>
  )
}

const SwitchButtonStyled = styled.div`
  /* border: 2px solid red; */
  background-color: ${theme.colors.background_white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2rem;
  min-width: 6.5rem;
  cursor: pointer;
  border-radius: ${theme.borderRadius.round};
  /* padding: 8px 16px; */

  .on-icon,
  .off-icon {
    /* border: 2px solid blue; */
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    font-size: ${theme.fonts.P1};

    &.activated {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
      border-radius: ${theme.borderRadius.round};
      width: 60%;
      transition: all 300ms;
    }

    &.not-activated {
      background: ${theme.colors.background_white};
      color: ${theme.colors.primary};
      border-radius: ${theme.borderRadius.round};
      width: 40%;
      transition: all 300ms;
    }
  }
`
