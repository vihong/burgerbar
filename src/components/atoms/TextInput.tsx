import React from "react"
import styled from "styled-components"
import { theme } from "theme"

interface TextInputProps {
  IconComponent?: JSX.Element
  className?: string
  [x: string]: any
}

const TextInput = React.forwardRef(
  ({ IconComponent, className, ...rest }: TextInputProps, ref: any) => {
    return (
      <TextInputStyled className={className}>
        {IconComponent && IconComponent}
        <input type="text" {...rest} ref={ref} />
      </TextInputStyled>
    )
  }
)

const TextInputStyled = styled.div`
  /* border: 1px solid yellow; */
  background-color: ${theme.colors.background_white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 8px 16px;
  /* margin: 8px 0; // should be there or in parent style? */

  .icon {
    font-size: ${theme.fonts.P1};
    margin-right: ${theme.gridUnit * 1.6}px;
    color: ${theme.colors.greyBlue};
    min-width: 1em; // that way, the icon size is NOT affected by width of the entire component.
  }

  input {
    /* border: 1px solid red; */
    background: ${theme.colors.background_white};
    border: none;
    font-size: ${theme.fonts.P0};
    color: ${theme.colors.black};
    width: 100%;

    ::placeholder {
      color: ${theme.colors.greyMedium};
    }

    &:focus {
      outline: 0;
    }
  }
`
export default TextInput
