
import React, { useState } from 'react';
import NavServices from './navServices';
import ShowServices from './showServices';
import servicesData from '../../data';
import NavServicesMobile from './navServicesMobile';
import styled from 'styled-components'
import { tablet } from '../Styled-Components/Responsive';
const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleSelectService = (id) => {
    const selectedServiceItem = servicesData.flatMap(section => section.items).find(item => item.id === id);

    if (selectedServiceItem) {
      setSelectedService(selectedServiceItem);
    } else {
      console.error("No se encontró ningún servicio con el ID:", id);
    }
  };

  return (
    <>
      <DesktopMenu>
        <NavServices services={servicesData} onSelectService={handleSelectService} />
      </DesktopMenu>
      <MobileMenu>
        <NavServicesMobile services={servicesData} onSelectService={handleSelectService} />
      </MobileMenu>
      <ShowServices selectedService={selectedService}  />
    </>
  );
};

export default Services;

const DesktopMenu = styled.div`
display: block;
  ${tablet({
    display: 'none',
  })}
`;

const MobileMenu = styled.div`

display: none;
${tablet({
  display: 'block',
})}
`;