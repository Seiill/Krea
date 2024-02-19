import styled from 'styled-components';
import {variables} from '../../components/Styled-Components/themMode'
import { mobile } from '../Styled-Components/Responsive';
export const ErrorMessage = styled.div`
font-size: 2rem;
color: black;
margin: auto;
`;
export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  
`;
export const ButtonContainer = styled.div`
display: flex;
    width: 100%;
    justify-content: center;
    column-gap: 20px;
    flex-wrap: wrap;
`
export const Question = styled.div`
background-color: ${variables.secondColor};
  min-width: 100%;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
  transition: transform 0.5s ease-in-out;
  ${mobile({
    height: "100%",
    padding: "1rem 0",
    overflow: "visible",
    marginBottom: "2rem"
  })}
`;

export const Response = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

`;

export const Button = styled.button`
  margin-top: 20px;
  width: 15%;
  min-width: 350px;
  font-size: ${variables.smallFont};
  padding: 10px;
  color: ${variables.primaryColor};
  border: none;
  background-color: ${variables.hoverSecondaryLightColor};
  border-radius: 20px;
  font-weight: ${variables.boldFont};
  transition: all 0.3s ease-in-out;
  &:hover{
    background-color: ${variables.hoverSecondaryDarkColor};
    color: ${variables.bgColor};
  }
`;

export const Form = styled.form`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

export const Span = styled.span`
width: 70%;
text-align: center;
font-size: ${variables.mediumFont};
font-weight: ${variables.mediumBoldFont};
background-color: ${variables.primaryColor};
padding: 10px;
border-radius: 20px;
color: ${variables.bgColor};
`;
export const Label = styled.label`
border: solid 2px;
border-radius: 20px;
display: flex;
column-gap: ${variables.mediumFont};
font-size: ${variables.smallFont};
font-weight: ${variables.boldFont};
color: ${variables.bgColor};
padding: 10px;
`
export const Input = styled.input`

`