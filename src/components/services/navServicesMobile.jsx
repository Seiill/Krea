import React, { useState } from 'react';
import styled from 'styled-components';
import { Nav, ButtonServices } from './navElements';
import { FiChevronDown } from 'react-icons/fi'; 
import { variables } from '../Styled-Components/themMode';
const NavServicesMobile = ({ services, onSelectService }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  const handleClickService = (serviceId) => {
    onSelectService(serviceId); 
    setIsExpanded(false); 
  };
  return (
    <MobileNav>
      <ButtonToggle onClick={handleToggle}>
        Ver Servicios <FiChevronDown />
      </ButtonToggle>
      {isExpanded && (
        <Nav>
          {services.flatMap(section => section.items).map((service) => (
            <ButtonServices key={service.id} onClick={() => handleClickService(service.id)}>
              {service.title}
            </ButtonServices>
          ))}
        </Nav>
      )}
    </MobileNav>
  );
};

export default NavServicesMobile;

const MobileNav = styled.div`
width: 100%;
display: flex;
position: fixed;
z-index: 12;
top: 70px;
row-gap: 1.2rem;
flex-direction: column;
align-items: center;
background-color: ${variables.bgColor};

`;

const ButtonToggle = styled.button`
  width: fit-content;
  height: 2.5rem;
  font-family: 'DINAlternate';
  background-color: ${variables.secondColor};
  border: none;
  color: ${variables.bgColor};
  border-radius: 15px;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2.5rem;
  font-weight: ${variables.boldFont};
  font-size: ${variables.smallFont};

  &:hover {
    color: ${variables.primaryColor};
    font-weight: ${variables.mediumBoldFont};
    border: none;
    transform: scale(1.05);
  }
`;
