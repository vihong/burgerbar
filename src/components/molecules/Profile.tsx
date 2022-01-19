import React from "react"
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
        <img src="images/male_model.jpeg" alt="" />
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
    position: relative;
    width: 40px;
    &:after {
      content: "";
      display: block;
      padding-bottom: 100%; 
      /* The padding depends on the width, not on the height, so with a padding-bottom of 100% you will get a square */
    }
    img {
      top: 0;
      bottom: 0;
      left: 0;
      right: 0; /* Make the picture taking the size of it's parent */
      width: 100%; /* This if for the object-fit */
      height: 100%; /* This if for the object-fit */
      object-fit: cover; /* Equivalent of the background-size: cover; of a background-image */
      object-position: center;
      border-radius: ${theme.borderRadius.circle}; */
    }
  }
`
