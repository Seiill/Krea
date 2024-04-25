import styled, { keyframes } from 'styled-components'
import { variables } from '../Styled-Components/themMode';
import { mobile } from '../Styled-Components/Responsive';
export const Container = styled.div`
width: 100%;
max-width: 1280px;
display: flex;
flex-direction: column;
align-items: center;

`
export const VideoContainer = styled.section`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 1rem;
width: 100%;

`
export const  AboutUsProfile = styled.div`
display: flex;
width: 100%;
flex-wrap: wrap;
justify-content: space-evenly;
`
export const Source = styled.source`
`
export const PlatformSection = styled.section`
margin: auto;
display: flex;
flex-wrap: wrap;
column-gap: 1rem;
align-items: center;
justify-content: space-around;
width: 100%;
height: 100%;
background-color: ${variables.secondColor};
padding: 5rem 0; 
`
export const EstrategyContainer = styled.div`
display: flex;
width: 40%;
min-width: 20rem;
flex-direction: column;
align-items: center;
`
export const TextContainer = styled.div`
padding-top: 1.3rem;
width: 90%;
`
const cursorAnimation = keyframes`
  50% {
    border-color: transparent;
  }
`;
const typingAnimation = keyframes`
  from {
    width: 0;
  }
`;
export const TitleFirst = styled.h2`
  letter-spacing: 10px;
  border-right: 5px solid;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  animation:
    ${typingAnimation} 2s,
    ${cursorAnimation} .4s step-end infinite alternate;
    ${mobile({
      textWrap: "balance",
    textAlign: "center",
    })}
`;
export const Title = styled.h2`
font-family: 'DINAlternate';

`
export const Titles = styled.h2`
font-family: 'DINAlternate';
font-size: ${variables.bigFont};
text-align: center;
color: ${variables.hoverPrimaryDarkColor};

`
export const SectionContainer = styled.article`
display: flex; 
flex-direction: column;
width: 100%;

`
export const Image = styled.img`
width: 100%;
object-fit:cover;
object-position: center;
`
export const ProfileSection = styled.section`
display: flex;
  
  justify-content: center;
  width: 100%;
  height: 100%
`
export const Profile = styled.div`
text-align: center;
`
export const Description = styled.p`
width: 70%;
text-align: center;
font-weight: ${variables.mediumBoldFont};
padding: 1rem;
text-wrap: balance;
`
export const ImageContainer = styled.div`
width: 50%;
min-width: 300px;
padding: 1.5rem 0;
overflow: hidden;
`
export const ValorSection = styled.section`
  display: grid;
  align-content: space-between;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  width: 100%; 
  height: 100%;
  margin: 1rem auto; 
  padding-bottom: 3rem;
`;

export const ValorCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
  width: 88%;
  max-height: 600px;
  min-height: 300px;
  margin: 1rem auto; 
  border-radius: 15px;
  overflow: hidden;
  border: solid 2px ${(props) =>
    props.$index % 2 === 0 ? variables.secondColor : variables.primaryColor};
    
`;

export const IconContainer = styled.div`
  font-size: 2.5rem;
  color:${variables.secondColor}
`;