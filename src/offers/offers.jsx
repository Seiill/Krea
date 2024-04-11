import React from 'react';
import { offersData } from '../data';

import {
    TitleContainer,
    CategoryTitle,
    PlansContainer,
    PlanCard,
    PlanTitle,
    PlanDetails,
    PlanDetail,
    ActionButton,
    ModalBackground,
    ModalContent,
    CloseButton,
  } from './offersElements';


const Offers = ({ category, onClose }) => {
     const categoryOffers = offersData.find((offerData) => offerData.category === category);
    console.log(categoryOffers);
    if (!categoryOffers) {
        return <div>No hay ofertas disponibles para esta categoría.</div>; 
      } 
  return (
    <ModalBackground onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
      
      <CategoryTitle>{categoryOffers.category}</CategoryTitle>
      <PlansContainer>
            {categoryOffers.plans.map((plan) => (
              <PlanCard key={plan.name}>
                <TitleContainer>
                <PlanTitle>{plan.name}</PlanTitle>
                </TitleContainer>
                <PlanDetails>
                  {plan.details.map((detail, index) => (
                    <PlanDetail key={index}>{detail}</PlanDetail>
                  ))}
                </PlanDetails>
                <ActionButton>{plan.action}</ActionButton>
              </PlanCard>
            ))}
          </PlansContainer>
        <CloseButton onClick={onClose}>Cerrar</CloseButton>
      </ModalContent>
    </ModalBackground>
  );
};

export default Offers;