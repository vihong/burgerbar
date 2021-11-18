import React from "react"
import { BsPlusSquareFill } from "react-icons/bs"
import styled from "styled-components"
import { theme } from "theme"
import IconLabel from "./IconLabel"

interface ButtonCallToActionProps {
  onClick: () => {}
}

export default function ButtonCallToAction({ onClick }: ButtonCallToActionProps) {
  return (
    <ButtonCallToActionStyled>
      <h2>Ajouter un produit</h2>
      <IconLabel onClick={onClick} IconComponent={<BsPlusSquareFill className="icon" />} />
    </ButtonCallToActionStyled>
  )
}

const ButtonCallToActionStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-right: 50px;
    height: 100%;
    padding: 0px 20px 5px;
    h2 {
      margin: 20 0;
      color: ${theme.colors.black};
    }
    .icon {
      color: orange;
      font-size: ${theme.fonts.P6};
      margin-top: 16px;
`
