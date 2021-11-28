import styled from "styled-components"
import { theme } from "theme"

export default function Header() {
  return (
    <HeaderSyled>
      <div className="total">
        <span>Total : </span>
        <span>10.80€</span>
      </div>
    </HeaderSyled>
  )
}

const HeaderSyled = styled.div`
  position: sticky;
  top: 0;

  min-height: 100px;
  background: ${theme.colors.background_black};

  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1em;
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 20%);
  color: ${theme.colors.white};
  line-height: 1.5;

  .votre-commande {
    /* border: 1px solid blue; */
    font-size: ${theme.fonts.P3};
    font-weight: ${theme.weights.bold};
    /* border: 1px solid red; */
  }

  .total {
    display: flex;
    justify-content: space-between;
    /* border: 1px solid red; */
    width: 100%;
    font-size: ${theme.fonts.P2};
    font-weight: ${theme.weights.medium};
    color: ${theme.colors.primary};
    > span:last-child {
      font-weight: ${theme.weights.regular};
    }
  }
`
