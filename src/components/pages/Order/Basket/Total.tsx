import React from "react"

export default function Total({ className }: { className?: string }) {
  return (
    <div className={className}>
      <span>Total</span>
      <span>10,80€</span>
    </div>
  )
}
