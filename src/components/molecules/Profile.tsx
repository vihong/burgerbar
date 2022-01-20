import { Link } from "@reach/router"
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
          Hey, <b>{name}</b>
        </p>
        <div className="description">
          <small>{description}</small>
        </div>
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
    text-align: right;
    margin-right: 10px;
    p {
      margin: 0;
      b {
        color: ${theme.colors.primary};
      }
    }
    .description {
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
      small {
        font-size: ${theme.fonts.XS};
        color: ${theme.colors.greyDark};
        /* font-weight: ${theme.weights.medium}; */
      }
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
