import styled from 'styled-components';
import { mobile } from '../Styled-Components/Responsive';
export const Container = styled.div`
position: relative;
top: 0;
  display: flex;
  width: 100%;
  height: 100;
  
  
`;

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
  padding: 2.5rem 0;
  font-size: 3rem;
`;

export const Image = styled.img`
  width: 80%;
  object-fit: cover;
  object-position: center;

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