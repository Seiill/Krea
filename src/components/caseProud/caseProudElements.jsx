import styled from 'styled-components';
import { variables } from '../Styled-Components/themMode';
import { mobile, tablet } from '../Styled-Components/Responsive';

export const Container = styled.div`
position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: -100vh;
  max-width: 1280px;
  ${tablet(
    {
      marginTop: "0",
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
align-items: center;
${tablet(
  {
    flexDirection: "column",
    padding: "2rem 0",
    rowGap: "1rem",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  }
)}
`;

export const Description = styled.p`
text-wrap: balance;
font-size:${variables.smallFont};
font-weight: ${variables.mediumBoldFont};
color: ${variables.hoverPrimaryDarkColor};
width: 80%; 
 ${tablet(
  {
    textAlign: "center",
  }
)} 
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
    ${tablet({
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