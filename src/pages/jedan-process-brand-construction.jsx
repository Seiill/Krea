import React, { useEffect } from 'react';
import BrandExample from '../components/brandExample'
import { scrollToTop } from '../components/Styled-Components/ScrollToTop';

const Jedan = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    < BrandExample/>
  )
}

export default Jedan