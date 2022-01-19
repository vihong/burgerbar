import React from "react"
import { BsPersonCircle } from "react-icons/bs"
import styled from "styled-components"
import { theme } from "theme"

interface ProfileProps {
  name?: string
  description?: string
}

export default function Profile({ name, description }: ProfileProps) {
  return (
    <ProfileStyled>
      <div className="info">
        <p>
          Bonjour <b>{name}</b>
        </p>
        <b>{description}</b>
      </div>
      <div className="picture">
        <BsPersonCircle />
      </div>
    </ProfileStyled>
  )
}

const ProfileStyled = styled.div`
  /* border: 1px solid blue; */

  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100px;

  .info {
    /* border: 1px solid green; */
    text-align: right;
    margin-right: 10px;
    p {
      /* background: pink; */
      margin: 0;
      b {
        color: ${theme.colors.black};
      }
    }
    > b {
      font-size: ${theme.fonts.XS};
      /* background: green; */
      color: ${theme.colors.primary};
    }
  }

  .picture {
    /* border: 1px solid red; */
    height: auto;
    display: flex;
    height: 100%;
    font-size: ${theme.fonts.P4};
    color: ${theme.colors.black};
  }
`
