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
  padding: 8rem;

  ${mobile({
    gridTemplateAreas: "'center' 'left' 'right'",
    gridTemplateColumns: "1fr",
    padding: "2rem",
    textAlign: "center",
  })}
`;
export const LeftColumn = styled.div`
  grid-area: left;
  /* background-color: #3498db; */
  color: #fff;
  padding: 10px;
`;

export const CenterColumn = styled.div`
  grid-area: center;
  align-self: center;
  ${mobile(
    {
      height: "350px",
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
  /* background-color: #e74c3c; */
  color: #fff;
  padding: 10px;
`;
export const TextContainer = styled.div`
  margin: 0;
  padding: 1.5rem 0;
`;
export const Title = styled.h1`
color: ${variables.secondColor}
`
export const TitleHeader = styled.h2`
position: relative;
top: 8rem;
color: ${variables.bgColor};
width: 50%;
text-align: center;
margin: auto;
padding: 20px 0;
${mobile({
  top: "2rem",
})}
`
export const Description = styled.p`

`

export const Blister = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: ${(props) => (props.$isswitchon ? '#ccc' : '#FEEB3D')};
`;

export const Filament = styled.svg`
  position: absolute;
  width: 28%;
  top: 95px;
  left: 50%;
  transform: translate(-50%, -50%);

  path.cls-1 {
    fill: ${variables.secondColor};
  }
`;

export const Vastago = styled.div`
position: absolute;
    left: 88px;
    height: 132px;
    width: 4px;
    background-color: #000;
    transform: skew(15deg, 0) scaleY(-1);
    top: 90px;

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
  }
`;

export const Cap = styled.div`
position: absolute;
    width: 70px;
    height: 80px;
    background-color: #f7f6ed;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 142px;
    z-index: -1;
    border-radius: 0 0 25px 25px;
`
export const Linecap = styled.div`
position: absolute;
top: 30px;
z-index: 2;
width: 100%;
height: 3px;
background-color: #000;

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
  }
`