import styled from 'styled-components';
import { variables } from '../Styled-Components/themMode';

export const TitleContainer = styled.div`
width: 100%;
height:  5rem;
background-color: ${({ index }) =>
    index % 2 === 0 ? variables.primaryColor : variables.secondColor};
margin-top: 0;
text-align: center;
`
export const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  width: 100%;
  background-color: ${variables.bgColor};
  padding: 20px;
  border-radius: 20px;
`;


export const CategoryTitle = styled.h2`

  margin-bottom: 2.5rem;
  color: ${variables.secondColor};
  text-align: center;
  font-size: ${variables.bigFont};
  text-transform: uppercase;
`;

export const PlansContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-bottom: 2rem;
  row-gap: 1rem;
`;

export const PlanCard = styled.div`
  border: 2px solid ${({ index }) =>
  index % 2 === 0 ? variables.primaryColor : variables.secondColor};
  border-radius: 5px;
  margin: 0 10px;
  flex: 1 1 300px;
  max-width: 350px;
  display: flex;
flex-direction: column;
justify-content: space-between;


`;

export const PlanTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 15px;
  text-transform: uppercase;
  color: ${variables.bgColor};
`;

export const PlanDetails = styled.ul`
list-style-type: disc;
display: flex;
row-gap: .3rem;
min-height: 350px;
flex-direction: column;
justify-content: space-between;
margin-right: 10px;
    
`;

export const PlanDetail = styled.li`
  margin-bottom: 5px;
  font-weight: ${variables.mediumBoldFont};
  text-wrap: balance;
`;

export const ActionButton = styled.button`
  background-color: transparent;
  color: ${({ index }) =>
  index % 2 === 0 ? variables.secondColor : variables.primaryColor };
  font-size: ${variables.mediumFont};
  font-weight: ${variables.mediumBoldFont};
  text-transform: capitalize;
  border: none;
  padding: 15px 15px;
  border-radius: 5px;
  cursor: pointer;
`;
