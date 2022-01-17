import React from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import styled from "styled-components"

interface CasinoEffectProps {
  count?: string | number
  className?: string
}

export default function CasinoEffect({ count, className }: CasinoEffectProps) {
  return (
    <TransitionGroup component={CountUpNumberStyled} className="casino-container">
      <CSSTransition classNames="count" timeout={300} key={count}>
        <div className={className}>{count}</div>
      </CSSTransition>
    </TransitionGroup>
  )
}

const CountUpNumberStyled = styled.div`
  /* border: 2px solid red; */
  position: relative;
  display: flex;
  overflow: hidden;

  .count-enter {
    /* background: lightgreen; */
    transform: translateY(100%);
    &.count-enter-active {
      /* background: green; */
      transition: 300ms;
      transform: translateY(0);
    }
  }

  .count-exit {
    /* background: pink; */
    transform: translateY(0);
    &.count-exit-active {
      position: absolute;
      bottom: 0;
      /* not important whether you add it to .count-exit or .count-exit-active, same result */
      /* background: red; */
      transition: 300ms;
      transform: translateY(-100%);
    }
  }
`
