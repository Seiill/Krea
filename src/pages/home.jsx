import React, { useEffect } from 'react';
import Hero from '../components/hero/index'
import { scrollToTop } from '../components/Styled-Components/ScrollToTop'
import Parallax from '../components/hero/Parallax';
const Home = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <>
    <Parallax/>
    <Hero/>
    </>
  )
}

export default Home