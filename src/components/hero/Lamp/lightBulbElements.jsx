import styled from "styled-components";
import { variables } from "../../Styled-Components/themMode";
import {mobile, tablet } from "../../Styled-Components/Responsive";
export const Container = styled.section`
width: 100%
`
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 10px;
  grid-template-areas:
    "left center right"
    "left center right"
    "left center right"
    "left center right";
  height: 100%;
  align-items: stretch;
  padding: 2rem 8rem;

  ${mobile({
    gridTemplateAreas: "'center' 'left' 'right'",
    gridTemplateColumns: "1fr",
    padding: "2rem",
    textAlign: "center",
  })}
`;
export const LeftColumn = styled.div`
  grid-area: left;
  color: #fff;
  padding: 10px;
`;

export const CenterColumn = styled.div`
  grid-area: center;
  align-self: center;
  margin-bottom: 100px;
  ${mobile(
    {
      height: "200px",
    }
  )}
`;
export const BulbLightContainer=styled.div`
${mobile({
  width: "100%",
  marginTop: "40%",
  height: "auto",
})}
`
export const BulbIcon = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  filter: grayscale(${(props) => (props.$isswitchon ? '0%' : '100%')});
  transition: filter 0.3s ease;
`;

export const RightColumn = styled.div`
  grid-area: right;
  color: #fff;
  padding: 10px;
`;
export const TextContainer = styled.div`
  margin: 0;
  padding: 1.5rem 0;
  border-bottom: solid 2px ${variables.secondColor};
  border-radius: 0 0 0 20px;
  ${mobile({
    padding: "2.5rem 2px",
    textWrap:" balance",
textAlign: "center",
  })}
`;
export const Title = styled.h1`
color: ${variables.secondColor};
font-family: 'DINAlternate';
`
export const TitleHeader = styled.h2`

position: relative;
top: 4rem;
color: ${variables.hoverPrimaryDarkColor};
width: 50%;
text-align: center;
margin: auto;
padding: 20px 0;
${mobile({
  top: "2rem",
  fontSize: `${variables.smallFont}`,
})}
`
export const Description = styled.p`
color: ${variables.hoverPrimaryDarkColor};
font-weight: ${variables.mediumBoldFont};
`

export const Blister = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: ${(props) => (props.$isswitchon ? '#ccc' : '#FFE268')};
${tablet({
    width: "100px",
    height: "100px",
   
})}

`;

export const Filament = styled.svg`
  position: absolute;
  width: 28%;
  top: 70px;
  left: 50%;
  transform: translate(-50%, -50%);

  path.cls-1 {
    fill: ${variables.secondColor};
  }
  ${tablet({
    width: "28%",
    top: "40px",
    left: "50%",
  })}
`;

export const Vastago = styled.div`
position: absolute;
position: absolute;
left: 67px;
height: 110px;
width: 4px;
background-color: #000;
transform: skew(15deg, 0) scaleY(-1);
top: 73px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 70px;
    height: 100%;
    width: 100%;
    background-color: inherit;
    transform: skew(30deg, 0) scaleY(-1);
    z-index: 1;
    ${tablet({
      left: "36px",
    })}
  }
  ${tablet({
    left: '31px',
    height: '32px',
    width:'2px',
    top: '50px',
  })}
`;

export const Cap = styled.div`
position: absolute;
    width: 70px;
    height: 80px;
    background-color: #d9d8ce;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 125px;
    z-index: -1;
    border-radius: 0 0 25px 25px;
    ${tablet({
      width: '21px',
      height: '40px',
      left:'50%',
      top: '60px',
    })}
`
export const Linecap = styled.div`
position: absolute;
top: 30px;
z-index: 2;
width: 100%;
height: 3px;
background-color: #000;
${tablet({
  top: '17px',
  height:'2px',
})}

&::before {
    content: '';
    position: absolute;
    top: 25px;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: inherit;
    transform: scaleY(-1);
    z-index: 3;
    ${tablet({
      top: "10px",
    })}
  }


`