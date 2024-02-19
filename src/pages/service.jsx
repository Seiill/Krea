import React, { useEffect } from 'react';
import Services from '../components/services'
import QuestionnaireForm from '../components/questionary'
import { scrollToTop } from '../components/Styled-Components/ScrollToTop';
const Service = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <>
    <Services/>
    <QuestionnaireForm />
    </>
  )
}

export default Service