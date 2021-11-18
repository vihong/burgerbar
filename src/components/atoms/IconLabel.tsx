import React from "react"
import styled from "styled-components"

interface IconLabelProps {
  IconComponent: JSX.Element
  label?: string
  [x: string]: any
}

export default function IconLabel(props: IconLabelProps) {
  const { IconComponent, label, ...rest } = props
  return (
    <IconLabelStyled {...rest}>
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
