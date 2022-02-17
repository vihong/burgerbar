import { resetMenuInFireStore } from "api/helpers"
import styled from "styled-components/macro"
import { theme } from "theme"
import { IoReloadOutline } from "react-icons/io5"

interface ResetMenuProps {
  userAccount?: string
}

export default function ResetMenu({ userAccount }: ResetMenuProps) {
  return (
    <ResetMenustyled onClick={() => userAccount && resetMenuInFireStore(userAccount)}>
      <span>Reset le menu</span>
      <IoReloadOutline className="icon" color="white" />
    </ResetMenustyled>
  )
}

const ResetMenustyled = styled.div`
  position: absolute;
  top: 0%;
  right: 0;
  background: ${theme.colors.background_black};
  color: ${theme.colors.white};
  padding: 12px 16px;
  border-bottom-left-radius: 5px;
  display: flex;
  align-items: center;
  z-index: 3;
  cursor: pointer;
  .icon {
    margin-left: 10px;
  }
`
