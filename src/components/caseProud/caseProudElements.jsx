import styled from 'styled-components';
import { variables } from '../Styled-Components/themMode';
import { mobile } from '../Styled-Components/Responsive';

export const Container = styled.div`
position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: -100vh;
  max-width: 1280px;
  ${mobile(
    {
      marginTop: "0",
      height: "80vh",
    }
  )}
`;

export const Wrapper = styled.div`
display: flex;
justify-content: space-around;
padding: 4rem 0;
width: 100%;
max-width: 1280px;
overflow: hidden;
align-items: flex-end;
${mobile(
  {
    flexDirection: "column",
    padding: "2rem 0",
    rowGap: "1rem",
  }
)}
`;

export const Description = styled.p`
overflow-wrap: break-word;
font-size:${variables.smallFont};
font-weight: ${variables.mediumBoldFont};
color: ${variables.hoverPrimaryDarkColor};
width: 80%;
`;


export const ImageContainer = styled.div`
width: 60%;
border-radius: 20px;
overflow: hidden;
${mobile({
  width:"90%",
})}
`
export const Image = styled.img`
  width: 100%;
  object-fit: cover;

`;
export const Article= styled.article`
    width: 40%;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    align-items: flex-end;
    justify-content: center;
    text-align: right;
    ${mobile({
      width:"90%",
      alignItems:"center",
      justifyContent: "center",
      textAlign:"center",
      margin: "auto",
    })}
`
export const ButtonNext = styled.button`
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
`
export const ButtonContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
`