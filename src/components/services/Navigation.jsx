import React from 'react';
import { NavigationMenu, ButtonServicestwo, UL, Li } from './navElements';

const Navigation = ({ services, onSelectService }) => {
  return (
    <NavigationMenu>
      <UL>
        {services.map((service, id) => (
          <Li key={id}>
            <ButtonServicestwo onClick={() => onSelectService(id)}>
              {service.name}
            </ButtonServicestwo>
          </Li>
        ))}
      </UL>
    </NavigationMenu>
  );
};

export default Navigation;