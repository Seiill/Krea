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
width: 80%;
`;


export const ImageContainer = styled.div`
width: 100%;
${mobile({
  width:"90%",
})}
`
export const Image = styled.img`
  width: 100%;
  object-fit: cover;

`;
export const Article= styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    align-items: flex-end;
    ${mobile({
      width:"90%",
      alignItems:"center",
      justifyContent: "center",
      textAlign:"center",
      margin: "auto",
    })}
`
export const ButtonNext = styled.button`
font-size: ${variables.smallFont};
color: #111;
transition: transform 0.3s;
margin: 0 20px;
margin-bottom: 20px;

  &:hover {
    color: #666;
    text-decoration: underline;
    transform: scale(1.1);
  }
`
export const ButtonContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
`