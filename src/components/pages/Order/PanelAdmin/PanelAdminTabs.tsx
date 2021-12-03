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

  let classNameAdd = "form-tab"
  let classNameEdit = "form-tab"

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

  classNameAdd += isAddFormVisible ? " active" : ""
  classNameEdit += isEditFormVisible ? " active" : ""

  return (
    <PanelAdminTabsStyled>
      <WindowTab
        IconComponent={
          isCollapsed ? <FiChevronUp className="icon" /> : <FiChevronDown className="icon" />
        }
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="collapse-tab"
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
    background-color: ${theme.colors.incognito};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.greyLight};
    border-bottom: none;

    :hover {
      background: ${theme.colors.white};
      color: ${theme.colors.incognito};
      border-bottom: 1px solid ${theme.colors.white};
    }
    .icon {
      min-width: 1.5em;
      min-height: 1.5em;
    }
  }

  .form-tab {
    box-shadow: 0 -2px 8px -2px rgb(0 0 0 / 10%);
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.greyLight};
    border-left: 1px solid ${theme.colors.greyLight};
    border-bottom: 1px solid ${theme.colors.greyLight};
    color: ${theme.colors.greySemiDark};
    margin-left: 3px;
    :hover {
      /* background: ${theme.colors.white}; */
      /* color: ${theme.colors.primary}; */
      text-decoration: underline;
      border-bottom: 1px solid ${theme.colors.greyLight};
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
      background: ${theme.colors.white};
      border-bottom: 1px solid ${theme.colors.white};
      color: ${theme.colors.primary};
      font-weight: ${theme.weights.bold};
    }

    /* &:hover { */
    /* background: ${theme.colors.primary}; */
    /* color: ${theme.colors.white}; */
    /* } */

    &:active {
      /* background: ${theme.colors.white}; */
      /* color: ${theme.colors.primary}; */
      text-decoration: none;
    }
  }
`
// @TODO: refactor with one parent class "tab" then add "collapse" or "form"
