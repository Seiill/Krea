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

  return (
    <MobileNav>
      <ButtonToggle onClick={handleToggle}>
        Ver Servicios <FiChevronDown />
      </ButtonToggle>
      {isExpanded && (
        <Nav>
          {services.flatMap(section => section.items).map((service) => (
            <ButtonServices key={service.id} onClick={() => onSelectService(service.id)}>
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
  position: relative;
`;

const ButtonToggle = styled.button`
  width: 100%;
  height: 2.5rem;
  font-family: 'DINAlternate';
  background-color: ${variables.bgColor};
  border: none;
  color: ${variables.primaryColor};
  border-radius: 0 0 15px 15px;
  transition: all 0.3s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  &:hover {
    color: ${variables.secondColor};
    font-weight: ${variables.mediumBoldFont};
    border: none;
    transform: scale(1.05);
  }
`;
