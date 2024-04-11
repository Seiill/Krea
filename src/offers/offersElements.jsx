import styled from 'styled-components';
import { variables } from '../components/Styled-Components/themMode';
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.div`
width: 100%;
height:  3rem;
background-color:  ${variables.primaryColor};
margin-top: 0;
text-align: center;
`
export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
`;

export const CloseButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const CategoryTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: ${variables.secondColor};
  text-align: center;
  font-size: ${variables.bigFont};
  text-transform: uppercase;
`;

export const PlansContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const PlanCard = styled.div`
  border: 1px solid ${variables.primaryColor};
  border-radius: 5px;
  margin: 0 10px;
  flex: 1 1 300px;
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
justify-content: space-evenly;
    
`;

export const PlanDetail = styled.li`
  margin-bottom: 5px;
  font-weight: ${variables.mediumBoldFont};
`;

export const ActionButton = styled.button`
  background-color: transparent;
  color: ${variables.secondColor};
  font-size: ${variables.mediumFont};
  font-weight: ${variables.mediumBoldFont};
  text-transform: capitalize;
  border: none;
  padding: 15px 15px;
  border-radius: 5px;
  cursor: pointer;
`;
