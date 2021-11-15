import React from "react"

interface ButtonProps {
  label: string
  onClick?: any
  style?: React.CSSProperties
  className?: string
}

export default function Button({ label, onClick, style, className }: ButtonProps) {
  return (
    <button onClick={onClick} style={style} className={className && className}>
      {label}
    </button>
  )
}
