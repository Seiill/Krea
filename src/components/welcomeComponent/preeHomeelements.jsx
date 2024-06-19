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
position: relative;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
background-color: #f0f0f0;

justify-content: space-between;
${tablet({
  flexDirection: "column",
})}


`
export const DivTextStyled = styled.div`

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 1;
  transform: translateX(0);
  transition: transform 1s ease, opacity 1s ease;
  ${tablet({
    width: "100%",
    backgroundColor: `${variables.bgColor}`,
    height: "50vh",
  })}
`;
export const Span = styled.span`
  font-size: ${({ fontSize }) => fontSize || '2rem'};
  font-family: ${({ fontFamily }) => fontFamily};
  
  font-weight: bold;
  letter-spacing: ${({ letterSpacing }) => letterSpacing || '0'};
  color: ${({ $textShadow }) => ($textShadow ? variables.bgColor : variables.hoverPrimaryDarkColor)};
  text-shadow: ${({ $textShadow }) => $textShadow || 'none'};

  ${mobile({
    fontSize: ({ $mobileFontSize }) => $mobileFontSize || 'inherit',
  })}
`;
export const textShadowStyles = `
  -2px -2px 0 ${variables.hoverPrimaryDarkColor},
   2px -2px 0 ${variables.hoverPrimaryDarkColor},
  -2px  2px 0 ${variables.hoverPrimaryDarkColor},
   2px  2px 0 ${variables.hoverPrimaryDarkColor},
`;
export const Wiggle = styled.span`
color:${variables.hoverPrimaryDarkColor};
font-family: ${props => props.fontFamily};
font-size: ${({ fontSize }) => fontSize || '5.3rem'};
font-weight: 900;
display: inline-block; 
letter-spacing: 29.3px;
animation: ${wiggleAnimation} 2s ease-in-out 1; 
text-align: center;
padding-left: 20px;
${mobile({
  fontSize: ({ $mobileFontSize }) => $mobileFontSize || 'inherit',
})}

`
export const Image = styled.img`
width: 100%;

object-fit: cover;
object-position: center;
/* ${mobile({
  marginBottom: '4rem',
})} */
`
export const DivImage = styled.div`
    flex: 1;
  opacity: 1;
  transform: translateX(0);
  transition: transform 1s ease, opacity 1s ease;
  ${tablet({
    width: "100%",
    backgroundColor: `${variables.bgColor}`,
    height: "50vh",
  })}
`