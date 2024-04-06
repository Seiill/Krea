// NavServices.jsx
import React from 'react';
import { Nav, ButtonServices } from './navElements';

const NavServices = ({ services, onSelectService }) => {
  return (
    <Nav>
      {services.flatMap(section => section.items).map((service) => (
        <ButtonServices key={service.id} onClick={() => onSelectService(service.id)}>
          {service.title}
        </ButtonServices>
      ))}
    </Nav>
  );
};

export default NavServices;
