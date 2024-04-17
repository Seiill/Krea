import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { offersData } from '../../data';
import {
  TitleContainer,
  CategoryTitle,
  PlansContainer,
  PlanCard,
  PlanTitle,
  PlanDetails,
  PlanDetail,
  ActionButton,
} from './offersElements';

const Offers = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const categoryOffers = offersData.find((offerData) => offerData.category === category);

  if (!categoryOffers) {
    return <div>No hay ofertas disponibles para esta categoría.</div>;
  }

  return (
    <>
      <CategoryTitle>{categoryOffers.category}</CategoryTitle>
      <PlansContainer>
        {categoryOffers.plans.map((plan, index) => (
          <PlanCard key={plan.name} index={index}>
            <TitleContainer index={index}>
              <PlanTitle>{plan.name}</PlanTitle>
            </TitleContainer>
            <PlanDetails>
              {plan.details.map((detail, index) => (
                <PlanDetail key={index}>{detail}</PlanDetail>
              ))}
            </PlanDetails>
            <ActionButton index={index} onClick={() => navigate(`/contactUs`)}>
              {plan.action}
            </ActionButton>
          </PlanCard>
        ))}
      </PlansContainer>
    </>
  );
};

export default Offers;
