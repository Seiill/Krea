import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Nav, ButtonServices } from './navElements';

const NavServices = ({ services, onSelectService }) => {
  const items = services.flatMap(section => section.items);

  const animationVariants = {
    hidden: { scale: 1 },
    visible: (i) => ({
      scale: [1, 1.2, 1],
      transition: {
        delay: i * 0.2,
        duration: .7,
        repeatType: 'loop',
      },
    }),
  };

  return (
    <Nav>
      {items.map((service, index) => (
        <motion.div 
          style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
          key={service.id}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          whileHover={{ scale: 1.2 }}
        >
          <ButtonServices onClick={() => onSelectService(service.id)}>
            {service.title}
          </ButtonServices>
        </motion.div>
      ))}
    </Nav>
  );
};

export default NavServices;
