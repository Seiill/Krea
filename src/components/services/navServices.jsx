import React from 'react';
import { Nav, ButtonServices} from './navElements';
const NavServices = ({ services, onSelectService }) => {
  return (
    <Nav>
      {services.map((service, id) => (
        <ButtonServices key={id} onClick={() => onSelectService(id)}>
          {service.name}
        </ButtonServices>
      ))}
    </Nav>
  );
};

export default NavServices;
