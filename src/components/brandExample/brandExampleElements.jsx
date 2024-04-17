import styled from "styled-components";
import { variables } from "../Styled-Components/themMode";
import { mobile, tablet } from "../Styled-Components/Responsive";

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  max-width: 1280px;
  color: ${variables.hoverPrimaryDarkColor};
  margin: auto;
`;

export const Banner = styled.section`
  position: relative;
  background-color: #253E8E;
  height: 90vh;
`;

export const Shapes = styled.img`
  position: absolute;
  z-index: 1;
  object-fit: cover;
  object-position: center;
  width: 110%;
  height: 100%;
`;

export const LogoWhite = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 45%;
  z-index: 2;
  object-position: center;
`;

export const Text = styled.p`
  width: 60%;
  height: fit-content;
  text-wrap: balance;
  font-size: ${variables.smallFont};
  font-weight: ${variables.mediumBoldFont};

  ${tablet({
    width: '85%',
    margin: '10px',
  })}
`;

export const Section = styled.section``;

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas:
    'description description'
    'left right';
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  ${tablet({
    gridTemplateAreas: `
      'description'
      'left'
      'right'
    `,
    justifyItems: 'center',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '15vh 1fr 1fr',
  })}
  ${mobile({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  })}
`;

export const Description = styled.div`
  grid-area: description;
  padding: 10px;
  width: 100%;
  height: fit-content;

  ${tablet({
    gridArea: 'description',
    padding: '10px',
    width: '100%',
  })}
`;

export const LeftColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: left;
  padding: 10px;
  width: 100%;

  ${tablet({
    gridArea: 'left',
    padding: '10px',
    width: '100%',
  })}
`;

export const RightColumn = styled.div`
  grid-area: right;
  padding: 10px;
  width: 100%;

  ${mobile({
    gridArea: 'right',
    padding: '10px',
    width: '100%',
  })}
`;

export const Img = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

export const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

  ${mobile({
    gridTemplateColumns: '1fr',
  })}
`;

export const ColorDiv = styled.div`
  background-color: ${(props) => props.color};
  color: white;
  padding: 10px;
  text-align: center;
  position: relative;
  height: 50vh;
  min-height: 20vh;
  font-size: 1.5rem;
  font-weight: bold;
  ${mobile({
    height:"15vh",
    minHeight: '10vh',
  })}
`;

export const ColorName = styled.span`
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
`;

export const ContainerSection = styled.div``;

export const ImageContainer = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
`;
