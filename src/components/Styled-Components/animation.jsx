import styled,{css, keyframes} from "styled-components";
export const wiggleAnimation = keyframes`${css`
  0%, 100% {
    opacity: 0;
    transform: scaleX(1) scaleY(1);
  }
  70% {
    opacity: .8;
    transform: scaleX(1.2) scaleY(1.3);
  }
  100%{
    opacity: 1;
    transform: scaleX(1) scaleY(1);
  }
`}`;