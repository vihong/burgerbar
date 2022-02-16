import { resetMenuInFireStore } from "api/helpers"
import PrimaryButton from "components/atoms/PrimaryButton"
import OrderContext from "context/OrderContext"
import React, { useContext } from "react"
import styled from "styled-components/macro"
import { theme } from "theme"

interface ResetMenuProps {
  userAccount?: string
}

export default function ResetMenu({ userAccount }: ResetMenuProps) {
  return (
    <ResetMenustyled onClick={() => userAccount && resetMenuInFireStore(userAccount)}>
      ResetMenu
    </ResetMenustyled>
  )
}

const ResetMenustyled = styled.div`
  border: 1px solid blue;
  position: absolute;
  top: 0%;
  right: 0;
`
