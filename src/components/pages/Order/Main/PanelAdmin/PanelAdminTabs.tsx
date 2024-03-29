import React, { useContext } from "react"
import WindowTab from "components/atoms/WindowTab"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { BsPlusLg } from "react-icons/bs"
import { MdModeEditOutline } from "react-icons/md"
import OrderContext from "context/OrderContext"
import styled from "styled-components"
import { theme } from "theme"

export default function PanelAdminTabs() {
  const {
    isCollapsed,
    setIsCollapsed,
    isAddFormVisible,
    setIsAddFormVisible,
    isEditFormVisible,
    setIsEditFormVisible,
  } = useContext(OrderContext)

  let classNameCollapse = "collapse-tab"
  let classNameAdd = "tab form-tab"
  let classNameEdit = "tab form-tab"

  const handleAddButton = () => {
    if (isCollapsed) setIsCollapsed(!isCollapsed)
    setIsEditFormVisible(false)
    setIsAddFormVisible(true)
  }

  const handlEditButton = () => {
    if (isCollapsed) setIsCollapsed(!isCollapsed)
    setIsAddFormVisible(false)
    setIsEditFormVisible(true)
  }

  classNameCollapse += isCollapsed ? " active" : ""
  classNameAdd += isAddFormVisible ? " active" : ""
  classNameEdit += isEditFormVisible ? " active" : ""

  return (
    <PanelAdminTabsStyled>
      <WindowTab
        IconComponent={
          isCollapsed ? <FiChevronUp className="icon" /> : <FiChevronDown className="icon" />
        }
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={classNameCollapse}
      />
      <WindowTab
        label="Ajouter un produit"
        IconComponent={<BsPlusLg className="icon" />}
        onClick={handleAddButton}
        className={classNameAdd}
      />
      <WindowTab
        label="Modifier un produit"
        IconComponent={<MdModeEditOutline className="icon" />}
        onClick={handlEditButton}
        className={classNameEdit}
      />
    </PanelAdminTabsStyled>
  )
}

const PanelAdminTabsStyled = styled.div`
  position: absolute;
  top: -37px;
  left: 8%;
  transform: translateX(-8%);
  border: 1px solid transparent;
  display: flex;

  .collapse-tab {
    background-color: ${theme.colors.white};
    color: ${theme.colors.greySemiDark};
    border: 1px solid ${theme.colors.greyLight};
    border-bottom: none;
    box-shadow: 0 -2px 8px -2px rgb(0 0 0 / 10%);

    :hover {
      border-bottom: 1px solid ${theme.colors.white};
    }
    .icon {
      min-width: 1.5em;
      min-height: 1.5em;
    }

    &:active {
      background: ${theme.colors.background_black};
      color: ${theme.colors.white};
      border: 1px solid ${theme.colors.background_black};
    }

    &.active {
      background: ${theme.colors.background_black};
      color: ${theme.colors.white};
      border: 1px solid ${theme.colors.background_black};
    }
  }

  .form-tab {
    box-shadow: 0 -2px 8px -2px rgb(0 0 0 / 10%);
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.greyLight};
    border-left: 1px solid ${theme.colors.greyLight};
    border-bottom: 1px solid ${theme.colors.greyLight};
    color: ${theme.colors.greySemiDark};
    margin-left: 1px;
    :hover {
      border-bottom: 1px solid ${theme.colors.white};
      text-decoration: underline;
    }
    span {
      font-weight: ${theme.weights.medium};
    }

    .icon {
      min-width: 1em;
      min-height: 1em;
      margin-right: 0.5em;
    }

    &.active {
      background: ${theme.colors.background_black};
      border: 1px solid ${theme.colors.background_black};
      color: ${theme.colors.white};
      font-weight: ${theme.weights.bold};
    }

    &:active {
      background: ${theme.colors.white};
      color: ${theme.colors.greySemiDark};
      border: 1px solid ${theme.colors.greyLight};
      border-bottom: 1px solid ${theme.colors.white};
      text-decoration: none;
    }
  }
`
// @TODO: refactor with one parent class "tab" then add "collapse" or "form"
