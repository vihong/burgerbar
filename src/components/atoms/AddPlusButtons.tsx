import React from "react"
import styled from "styled-components"
import { MdOutlineAdd } from "react-icons/md"
import { BiMinus } from "react-icons/bi"
import { theme } from "theme/index"

export default function AddPlusButtons() {
  return (
    <AddPlusButtonsStyled>
      <button className="plus-icon">
        <MdOutlineAdd />
      </button>
      <button className="minus-icon">
        <BiMinus />
      </button>
    </AddPlusButtonsStyled>
  )
}

const AddPlusButtonsStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .plus-icon {
    height: 20px;
    border: 2px solid ${theme.colors.black};
    border-right-width: 1px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    color: ${theme.colors.white};
    background-color: ${theme.colors.green};
    :active {
      background-color: grey;
      color: ${theme.colors.white};
    }
  }
  .minus-icon {
    height: 20px;
    border: 2px solid ${theme.colors.black};
    border-left-width: 1px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    color: ${theme.colors.white};
    background-color: ${theme.colors.red};
    :active {
      background-color: grey;
      color: ${theme.colors.white};
    }
  }
`
