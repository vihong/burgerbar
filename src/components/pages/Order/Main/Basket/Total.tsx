import CasinoEffect from "components/atoms/CasinoEffect"
import React from "react"
import { formatPrice } from "utils/maths"

export default function Total({ className, total }: { className?: string; total: number }) {
  return (
    <div className={className}>
      <span>Total</span>
      <CasinoEffect count={formatPrice(total)} />
    </div>
  )
}
