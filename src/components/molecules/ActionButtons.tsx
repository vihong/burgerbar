import React, { useContext } from "react"
import styled from "styled-components"
import { BsPlusLg } from "react-icons/bs"
import { MdModeEditOutline } from "react-icons/md"
import { GiClick } from "react-icons/gi"
import { theme } from "theme"
import OrderContext from "context/OrderContext"
import toast from "react-hot-toast"

export default function ActionButtons() {
  const { isAddFormVisible, setIsAddFormVisible, isEditFormVisible, setIsEditFormVisible } =
    useContext(OrderContext)

  let classNameAdd = "inside-buttons"
  let classNameEdit = "inside-buttons"

  classNameAdd += isAddFormVisible ? " active" : ""
  classNameEdit += isEditFormVisible ? " active" : ""

  const handleAddButton = () => {
    setIsEditFormVisible(false)
    setIsAddFormVisible(!isAddFormVisible)
  }

  const handlEditButton = () => {
    if (!isEditFormVisible)
      toast.success("Cliquer sur un produit pour le modifier", {
        position: "top-center",
        icon: <GiClick color={theme.colors.blue} />,
        style: {
          color: theme.colors.blue,
          borderWidth: 1,
          borderColor: theme.colors.blue,
          borderStyle: "solid",
        },
      })
    setIsAddFormVisible(false)
    setIsEditFormVisible(!isEditFormVisible)
  }

  return (
    <ActionButtonsStyled>
      <div className={classNameAdd} onClick={handleAddButton}>
        <BsPlusLg className="icon-button" />
      </div>
      <div className={classNameEdit} onClick={handlEditButton}>
        <MdModeEditOutline className="icon-button" />
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
    /* border: 1px solid ${theme.colors.greyDark}; */
    border-radius: ${theme.borderRadius.round};
    background: ${theme.colors.greyLight};

    display: flex;
    justify-content: center;
    align-items: center;
    .icon-button {
      width: 1em;
      height: 1em;
      vertical-align: middle;
      position: absolute;
      color: ${theme.colors.greyDark};
      /* color: ${theme.colors.background_white}; */
    }
  }
  .inside-buttons.active {
    background: ${theme.colors.primary};
    .icon-button {
      color: ${theme.colors.background_white};
    }
  }

  .inside-buttons:hover {
    cursor: pointer;
    background: ${theme.colors.primary};
    .icon-button {
      color: ${theme.colors.background_white};
    }
  }
`
