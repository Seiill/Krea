import React, { useState } from 'react';
import NavServices from './navServices';
import ShowServices from './showServices';
import servicesData from '../../data';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleSelectService = (id) => {
    setSelectedService(servicesData[id]);
  };

  
  return (
    <>
      <NavServices services={servicesData} onSelectService={handleSelectService} />
      <ShowServices selectedService={selectedService} servicesData={servicesData} onSelectService={handleSelectService} />
    </>
  );
};

export default Services;