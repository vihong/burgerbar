import React from "react"

interface ButtonProps {
  label: string
  onClick?: any
  style?: React.CSSProperties
  className?: string
  [x: string]: any
}

export default function Button({ label, onClick, style, className, ...rest }: ButtonProps) {
  return (
    <button onClick={onClick} style={style} className={className && className} {...rest}>
      {label}
    </button>
  )
}
