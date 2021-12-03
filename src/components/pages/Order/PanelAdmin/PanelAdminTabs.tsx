import React, { useContext } from "react"
import WindowTab from "components/atoms/WindowTab"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { BsPlusLg } from "react-icons/bs"
import { MdModeEditOutline } from "react-icons/md"
import OrderContext from "context/OrderContext"
import styled from "styled-components"
import { theme } from "theme"

export default function PanelAdminTabs() {
  const { isCollapsed, setIsCollapsed, setIsAddFormVisible, setIsEditFormVisible } =
    useContext(OrderContext)

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

  return (
    <PanelAdminTabsStyled>
      <WindowTab
        // label={isCollapsed ? "Ouvrir" : "Réduire"}
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
        className="forms-tab"
      />
      <WindowTab
        label="Modifier un produit"
        IconComponent={<MdModeEditOutline className="icon" />}
        onClick={handlEditButton}
        className="forms-tab"
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
      /* margin-right: 0.5em; */
    }
  }

  .forms-tab {
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.greyLight};
    border-left: 1px solid ${theme.colors.greyLight};
    border-bottom: 1px solid ${theme.colors.greyLight};
    color: ${theme.colors.white};
    margin-left: 1px;
    :hover {
      background: ${theme.colors.white};
      color: ${theme.colors.primary};
      border-bottom: 1px solid ${theme.colors.white};
    }
    span {
      font-weight: bold;
    }

    .icon {
      min-width: 1em;
      min-height: 1em;
      margin-right: 0.5em;
    }
  }
`
// @TODO: refactor with one parent class "tab" then add "collapse" or "form"
