import React, { useEffect } from 'react';
import AboutUs from '../components/aboutComponent';
import { scrollToTop } from '../components/Styled-Components/ScrollToTop';

const About = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <AboutUs />
  );
};

export default About;
