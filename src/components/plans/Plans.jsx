import React from 'react';
import { useNavigate } from 'react-router-dom';
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
} from './plansElements';
const Plans = () => {
    const navigate = useNavigate();

    return (
      <>
        {offersData.map((categoryData, categoryIndex) => (
          <div style={{paddingBottom: '2rem'}} key={categoryIndex}>
            <CategoryTitle>{categoryData.category}</CategoryTitle>
            <PlansContainer>
              {categoryData.plans.map((plan, planIndex) => (
                <PlanCard key={plan.name} index={planIndex}>
                  <TitleContainer index={planIndex}>
                    <PlanTitle>{plan.name}</PlanTitle>
                  </TitleContainer>
                  <PlanDetails>
                    {plan.details.map((detail, detailIndex) => (
                      <PlanDetail key={detailIndex}>{detail}</PlanDetail>
                    ))}
                  </PlanDetails>
                  <ActionButton index={planIndex} onClick={() => navigate(`/contactUs`)}>
                    {plan.action}
                  </ActionButton>
                </PlanCard>
              ))}
            </PlansContainer>
          </div>
        ))}
      </>
    );
}

export default Plans