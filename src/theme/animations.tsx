import { keyframes } from "styled-components"
import { theme } from "theme"

export const fadeInFromRight = keyframes`
  0% {
    position: absolute;
    z-index: -1;
    opacity: 0;
    transform: translateX(100%);
  }
  
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

export const shine = keyframes`
  0% {
    opacity: 0;
}
100% {
      color: ${theme.colors.redSecondary};

  }  
`

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  
  100% {
    opacity: 1;
  }
`
