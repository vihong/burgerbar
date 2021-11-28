import React from "react"
import { formatPrice } from "utils/maths"

export default function Total({ className, total }: { className?: string; total: number }) {
  return (
    <div className={className}>
      <span>Total</span>
      <span>{formatPrice(total)}</span>
    </div>
  )
}
