import PanelContext from "context/PanelContext"
import React, { useContext } from "react"
import styled from "styled-components"
import { BsPlusLg } from "react-icons/bs"
import { MdModeEditOutline } from "react-icons/md"
import { theme } from "theme"

export default function ActionButtons() {
  const { isAddFormVisible, setIsAddFormVisible, isEditFormVisible, setIsEditFormVisible } =
    useContext(PanelContext)

  console.log("isAddFormVisible: ", isAddFormVisible)
  console.log("isEditFormVisible: ", isEditFormVisible)
  return (
    <ActionButtonsStyled>
      <div className="inside-buttons">
        <BsPlusLg onClick={() => setIsAddFormVisible(!isAddFormVisible)} className="icon-button" />
      </div>
      <div className="inside-buttons">
        <MdModeEditOutline
          onClick={() => setIsEditFormVisible(!isEditFormVisible)}
          className="icon-button"
        />
      </div>
    </ActionButtonsStyled>
  )
}

const ActionButtonsStyled = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  height: 100px;

  .inside-buttons {
    width: 30px;
    height: 30px;
    /* border: 1px solid #6f737e; */
    border-radius: 50%;
    background: #e4e5e9;
    /* background: ${theme.colors.primary}; */
    display: flex;
    justify-content: center;
    align-items: center;
    .icon-button {
      width: 1em;
      height: 1em;
      vertical-align: middle;
      position: absolute;
      color: #6f737e;
      /* color: ${theme.colors.background_white}; */
    }
  }
`
