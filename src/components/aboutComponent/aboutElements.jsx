import styled, { keyframes } from 'styled-components'
import { variables } from '../Styled-Components/themMode';
export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
color: ${variables.hoverPrimaryDarkColor}
`
export const VideoContainer = styled.section`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 1rem;
`
export const  AboutUsProfile = styled.div`
width: 100%;
background-color: ${variables.primaryColor};
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
display: inline-block;
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
`;
export const Title = styled.h2`
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

`
export const ImageContainer = styled.div`
width: 78rem;;
padding: 3rem 1rem;

min-height: 8rem;
min-width: 8rem;

overflow: hidden;
`
export const ValorSection = styled.section`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(
    auto-fit,minmax(280px, 1fr));
  gap: 1rem;
  width: 100%; 
  height: 100vh;
  max-width: 1200px; 
  margin: 1rem auto; 
  padding: 1rem; 
`;

export const ValorCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;

  width: 90%;
  max-height: 600px;
  min-height: 300px;
  margin: 1rem 1rem; 
  border-radius: 15px;
  overflow: hidden;
  border: solid 2px ${(props) =>
    props.$index % 2 === 0 ? variables.secondColor : variables.primaryColor};
`;

export const IconContainer = styled.div`
  width: 100%;
`;