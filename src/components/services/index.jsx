// Services.jsx
import React, { useState } from 'react';
import NavServices from './NavServices';
import ShowServices from './showServices';
import servicesData from '../../data';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleSelectService = (id) => {
    console.log("ID seleccionado:", id);
    const selectedServiceItem = servicesData.flatMap(section => section.items).find(item => item.id === id);

    if (selectedServiceItem) {
      setSelectedService(selectedServiceItem);
    } else {
      console.error("No se encontró ningún servicio con el ID:", id);
    }
  };
  console.log("selectedService en Services:", selectedService);

  return (
    <>
      <NavServices services={servicesData} onSelectService={handleSelectService} />
      <ShowServices selectedService={selectedService} /* servicesData={servicesData} */ />
    </>
  );
};

export default Services;
