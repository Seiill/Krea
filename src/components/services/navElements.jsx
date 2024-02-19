import styled from 'styled-components';
import { variables } from '../Styled-Components/themMode';
import { mobile } from '../Styled-Components/Responsive';

export const Nav = styled.nav`

  position: absolute;
  display: flex;
  height: 60px;
  width: 100%;
  max-width: 1280px;
  top: 70px;
  justify-content: space-between;
  z-index: 2;
  ${mobile({
    flexWrap: "wrap",
    rowGap: "1rem",
  })}
`;

export const ButtonServices = styled.button`
  width: 23%;
  background-color: ${variables.primaryColor};
  color: ${variables.bgColor};
  border-radius: 0 0 10px 10px;
  transition: background-color 0.3s, color 0.3s, border-radius 0.3s font-weight: 0.3s; 

  &:hover {
    background-color: ${variables.hoverPrimaryLightColor};
    color: ${variables.hoverPrimaryDarkColor};
    border-radius: 0 0 20px 20px;
    font-weight: ${variables.mediumBoldFont};
  }
  ${mobile({
    minWidth: "150px",
  })}
`;

export const Aside = styled.aside`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 20px;
  height: 90%;
  ${mobile({
    marginTop:"2rem",
    height: "auto",
  })}
`;

export const H1 = styled.h1`
margin-top: 4rem;
color: ${variables.hoverPrimaryDarkColor};
`;

export const H3 = styled.h3`
color: ${variables.hoverPrimaryDarkColor};
`;

export const H2 = styled.h2`
color: ${variables.hoverPrimaryDarkColor};
`;

export const P = styled.p`
color: ${variables.hoverPrimaryDarkColor};
font-weight: ${variables.regularFont};
`;


export const ImageContainer = styled.figure`
  position: relative;
  top: .7rem;
  overflow: hidden;
  height: 90vh;
  ${mobile({
    height: 'auto',
  })}
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: inline-block;
  align-items: center;
  justify-content: center;
  position: relative; 
`;

export const Img = styled.img`
  width: 100%;
  object-fit: cover; 
`;

export const ShowContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin-top: 40px;
  display: grid;
  align-items: center;
  grid-template-columns: 30% 70%;
  justify-items: stretch;
  justify-content: space-evenly;
  position: relative;
  ${mobile({
    gridTemplateColumns: "1fr",
    height: "100%",
  })}
 
`;

export const ButtonContainer = styled.div`
position: absolute;
z-index: 1;
display: flex;
top: calc(50% - 50px);
width: 98%;
justify-content: space-between;
margin: 0 10px;
font-weight: bold;
`;
export const NavigationMenu = styled.nav`
position: absolute;
top: 25%;
left: 25%;
${
  mobile({display:"none",})
}
`
export const ButtonServicestwo  = styled.button`
border: none;
font-size: ${variables.smallFont};
font-weight: ${variables.regularFont};
color: ${variables.primaryColor};
background-color: transparent;
text-decoration: underline;
padding: 1rem;
max-width: 12rem;
min-width: 6rem;
transition: all 0.3s ease-in-out;

&:hover{
  color: ${variables.hoverSecondaryDarkColor};
  background-color: ${variables.hoverSecondaryLightColor};
  border: solid 2px ${variables.hoverSecondaryDarkColor};
  border-radius: 20px;
  text-decoration: none;
  font-weight: ${variables.boldFont};
}
`
export const UL = styled.ul`
list-style-type: none;
display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 25px;
`
export const Li = styled.li`
`
export const IfContainer = styled.section`
position: relative;
width: 80%;
margin: auto;
padding: 2rem 0;
`