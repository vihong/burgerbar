import React from "react"
import styled from "styled-components"
import { theme } from "theme"

export default function PanelAdmin() {
  return (
    <PanelAdminStyled>
      <h2>Panel administrateur</h2>
      <button className="add-item-card">Ajouter un produit</button>
      <input type="text" placeholder="cliquer sur un produit pour l'éditer" />
    </PanelAdminStyled>
  )
}

const PanelAdminStyled = styled.div`
  border-top: 2px solid ${theme.colors.primary};
  min-height: 20vh;
  padding: 10px 30px;

  .add-item-card {
    display: block;
    margin-bottom: 10px;
  }
`