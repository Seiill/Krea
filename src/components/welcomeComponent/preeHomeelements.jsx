import styled, { keyframes } from 'styled-components';
import { variables } from '../Styled-Components/themMode';
import { mobile, tablet } from '../Styled-Components/Responsive';
const wiggleAnimation = keyframes`
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
`;


export const Container = styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
width: 100%;
height: 100vh;
overflow: hidden;

justify-content: space-between;
${tablet({
  flexDirection: "column",
})}


`
export const DivTextStyled = styled.div`
  position: relative;
  z-index: 2;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2px;
  background-color: ${variables.bgColor};
  opacity: ${({ $hasScrolled }) => ($hasScrolled ? '0' : '1')};
  transform: translateY(${({ $scrolled, $scrollDirection }) =>
    $scrolled && $scrollDirection === 'down' ? '-100%' : '0'});
  transition: transform 0.5s ease, opacity 0.5s ease;
  ${tablet({
    width: "100%",
    backgroundColor: `${variables.bgColor}`,
    height: "50vh",
  })}
`;
export const Span =styled.span`
font-size: ${({ fontSize }) => fontSize || '2rem'};
font-family: ${props => props.fontFamily};
font-weight: bold;
letter-spacing: ${({ letterSpacing }) => letterSpacing || '0'};
color: ${({ $textShadow }) => ($textShadow ? variables.bgColor : variables.hoverPrimaryDarkColor)};
text-shadow: ${({ $textShadow }) => $textShadow || 'none'}
`
export const textShadowStyles = `
  -2px -2px 0 ${variables.hoverPrimaryDarkColor},
   2px -2px 0 ${variables.hoverPrimaryDarkColor},
  -2px  2px 0 ${variables.hoverPrimaryDarkColor},
   2px  2px 0 ${variables.hoverPrimaryDarkColor},
`;
export const Wiggle = styled.span`
color:${variables.hoverPrimaryDarkColor};
font-family: ${props => props.fontFamily};
font-size: 5.3rem;
font-weight: 900;
display: inline-block; 
letter-spacing: 29.3px;
animation: ${wiggleAnimation} 2s ease-in-out 1; 
text-align: center;
padding-left: 20px;

`
export const Image = styled.img`
width: 100%;

object-fit: cover;
object-position: center;
`
export const DivImage = styled.div`
display: flex;
  position: relative;
  z-index: 3;
  width: 50%;
  background-color: ${variables.bgColor};
  transform: translateX(${({ $scrolled, $scrollDirection }) =>
    $scrolled && $scrollDirection === 'down' ? '687px' : '0'});
  transition: transform 0.5s ease;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: ${({ $hasScrolled }) => ($hasScrolled ? '0' : '1')};
  transform: translateY(${({ $scrolled, $scrollDirection }) =>
    $scrolled && $scrollDirection === 'down' ? '100%' : '0'});
  transition: transform 0.5s ease, opacity 0.5s ease;
  ${tablet({
    width: "100%",
    backgroundColor: `${variables.bgColor}`,
    height: "50vh",
  })}
`