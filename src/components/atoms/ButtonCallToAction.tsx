import { IconType } from "react-icons/lib"
import styled from "styled-components"
import { theme } from "theme"

interface ButtonCallToActionProps {
  // onClick: () => {}
  label: string
  IconComponent?: JSX.Element
}

//TODO: find a way to have the onClick callback live inside ButtonCallToAction then raised / exposed aboved.

export default function ButtonCallToAction({ label, IconComponent }: ButtonCallToActionProps) {
  return (
    <ButtonCallToActionStyled>
      <h2>{label}</h2>
      {IconComponent}
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
      color: ${theme.colors.primary};
      font-size: ${theme.fonts.P6};
      margin-top: 16px;
      align-self: center;
`
