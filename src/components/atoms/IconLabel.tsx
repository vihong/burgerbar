import React from "react"
import styled from "styled-components"

interface IconLabelProps {
  IconComponent: JSX.Element
  label: string
}

export default function IconLabel(props: IconLabelProps) {
  const { IconComponent, label } = props
  return (
    <IconLabelStyled>
      {IconComponent}
      <p>{label}</p>
    </IconLabelStyled>
  )
}

const IconLabelStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 12px;
    margin-top: 5px;
  }
`
