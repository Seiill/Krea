import React, { useEffect } from 'react';
import PreHome from '../components/welcomeComponent/index'
import Hero from '../components/hero/index'
import { scrollToTop } from '../components/Styled-Components/ScrollToTop'
const Home = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <>
    <PreHome/>
    <Hero/>
    </>
  )
}

export default Home