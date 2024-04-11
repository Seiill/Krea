// Services.jsx
import React, { useState } from 'react';
import NavServices from './navServices';
import ShowServices from './showServices';
import servicesData from '../../data';

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
      <NavServices services={servicesData} onSelectService={handleSelectService} />
      <ShowServices selectedService={selectedService}  />
    </>
  );
};

export default Services;
