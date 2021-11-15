import React from "react"

interface ButtonProps {
  label: string
  onClick?: any
  style?: React.CSSProperties
}

export default function Button({ label, onClick, style }: ButtonProps) {
  return (
    <button onClick={onClick} style={style}>
      {label}
    </button>
  )
}
