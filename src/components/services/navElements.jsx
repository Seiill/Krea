import styled from 'styled-components';
import { variables } from '../Styled-Components/themMode';
import { mobile, tablet } from '../Styled-Components/Responsive';

export const Nav = styled.nav`

  position: absolute;
  display: flex;
  height: 60px;
  width: 100%;
  max-width: 1280px;
  top: 70px;
  justify-content: space-around;
  z-index: 2;
  ${mobile({
    flexWrap: "wrap",
    rowGap: "1rem",
  })}
`;

export const ButtonServices = styled.button`
width: 23%;
height: 2.5rem;
font-family: 'DINAlternate';
  background-color: ${variables.bgColor};
  border: none;
  color: ${variables.primaryColor};
  border-radius: 0 0 15px 15px;
  transition: all 0.3s;

  &:hover {
    color: ${variables.secondColor};
    font-weight: ${variables.mediumBoldFont};
    border: none;
    transform: scale(1.05);
  }
  ${mobile({
    minWidth: "150px",
  })}
`;



export const H1 = styled.h1`

margin-top: 4rem;
color: ${variables.hoverPrimaryDarkColor};
`;

export const H3 = styled.h3`
color: ${variables.hoverPrimaryDarkColor};
/* font-family: 'DINAlternate'; */
position: absolute;
    bottom: 100px;
    right: 170px;
    font-size: 1.2rem;

    ${mobile({
    right: "15px",
    bottom: "104px",
    textWrap: "balance",
    textAlign: "center",
    margin: "0 2px",
    })}
    ${tablet({
    right: "35px",
    bottom: "104px",
    textWrap: "balance",
    textAlign: "center",
    margin: "0 2px",
    })}
`;

export const H2 = styled.h2`
color: ${variables.hoverPrimaryDarkColor};
`;

export const P = styled.p`
color: ${variables.hoverPrimaryDarkColor};
font-weight: ${variables.regularFont};
`;

export const GridContainer = styled.div``
export const ImageContainer = styled.figure`
  position: relative;
  overflow: hidden;
  width: 100%;
  ${mobile({
    height: 'auto',
  })}
`;
export const ImageWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`
export const ViewFeatures = styled.button`
width: fit-content;
padding: 1rem 3rem; 
background-color: ${variables.secondColor};
border: none;
text-align: center;
color: ${variables.bgColor};
font-weight: ${variables.boldFont};
cursor: pointer;
transition: all .3s ease-in-out;
border-radius: 20px;
&:focus {
  outline: none;
}
&:active {
  transform: scale(.9);
}
${H3}, &::after{
  transition: inherit;
}
`
export const Title = styled.h1`
`
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
  max-height: 650px;
  object-fit: cover;
  
  ${mobile({
    height: '100vh',
    objectPosition: 'center',
    marginTop: '50px',
  })}
  ${tablet({
    height: '100vh',
    objectPosition: 'center',
    marginTop: '50px',

  })}
`;

export const ShowContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin-top: 40px;
  display: grid;
  align-items: center;
  justify-items: stretch;
  justify-content: space-evenly;
  position: relative;
  ${mobile({
    gridTemplateColumns: "1fr",
    height: "100%",
  })}
 
`;
export const ImageGrid = styled.div`
display: grid;
  grid-template-columns:  1fr 2fr;
  gap: 10px; 
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
&:focus {
  outline: none;
}
&:active {
  transform: scale(.9);
}
${H3}, &::after{
  transition: inherit;
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
width: 100%;
max-width: 1280px;
margin: auto;
`
export const SectionContainer= styled.section``