import OrderContext from "context/OrderContext"
import { useContext } from "react"
import styled from "styled-components/macro"
import WindowTab from "components/atoms/WindowTab"
import PanelWindow from "components/pages/Order/PanelAdmin/PanelWindow"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { BsPlusLg } from "react-icons/bs"

import { theme } from "theme"
import { MdModeEditOutline } from "react-icons/md"

export default function PanelAdmin() {
  const { isCollapsed, setIsCollapsed } = useContext(OrderContext)

  return (
    <PanelAdminStyled className="panel">
      <div className="panel-tabs">
        <WindowTab
          // label={isCollapsed ? "Ouvrir" : "Réduire"}
          IconComponent={
            isCollapsed ? <FiChevronUp className="icon" /> : <FiChevronDown className="icon" />
          }
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="collapse-tab"
        />
        <WindowTab
          label="Ajouter"
          IconComponent={<BsPlusLg className="icon" />}
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="forms-tab"
        />
        <WindowTab
          label="Modifier"
          IconComponent={<MdModeEditOutline className="icon" />}
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="forms-tab"
        />
      </div>
      {!isCollapsed && <PanelWindow />}
    </PanelAdminStyled>
  )
}

const PanelAdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  .panel-tabs {
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
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.greyLight};
      border-left: 1px solid ${theme.colors.greyLight};
      border-bottom: 1px solid ${theme.colors.greyLight};
      color: ${theme.colors.greyMedium};
      /* margin-left: 1px; */
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
  }
`
// @TODO: refactor with one parent class "tab" then add "collapse" or "form"
