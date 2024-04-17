import styled from 'styled-components';
import { mobile, tablet } from '../Styled-Components/Responsive';
import { variables } from '../Styled-Components/themMode';
export const Container = styled.div`
position: relative;
top: 0;
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  ${tablet({
    height: "auto",
  })}
`;
export const Thumbnail = styled.div`
  cursor: pointer;
  ${tablet({
    width: '100%',
  })}

`;
export const ConatinerThumbnail = styled.div`
display: flex;
${tablet({
    flexDirection: 'column',
})}
`
export const Wrapper = styled.div`
display: flex;
flex-direction: column;
padding: 4rem 0;
  margin: auto;
  width: 100%;
  height: auto;
  overflow: hidden;
  align-items: center;
  ${mobile({
    padding: "1rem 0",
  })}
`;

export const Title = styled.h2`
text-wrap: balance;
text-align: center;
width: 70%;
padding: 1.2rem 0;
color: ${variables.primaryColor};
${mobile({
  margin:"auto",
})}
`;
export const Description = styled.p`
font-size: 1.2rem;
font-weight: ${variables.mediumBoldFont};
font-family: 'DINAlternate';
color: ${variables.secondColor};
text-align: center;
`

export const Image = styled.img`
border-radius: .7rem;
  width: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease; 
  transform: scale(1);

  &:hover {
    transform: scale(1.2); 
  }
`;
export const ImageContainer = styled.figure`
padding: 1rem;
  width: 250px;
  height: 250px;
  overflow: hidden;
  border: solid 2px ${variables.hoverPrimaryDarkColor};
  border-radius: .8rem;
  display: flex;
  ${tablet({
    width: "300px",
    height: "300px",
  })}

`;
export const Button = styled.button`
font-size: 2.5rem;
padding: 15px;
background-color: #363636;
color: white;
transition: background-color 0.3s, transform 0.3s;
margin: 0 20px;

  &:hover {
    background-color: #999;
    color: #222;
    transform: scale(1.1);
  }
`