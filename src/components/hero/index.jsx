import React from 'react'
/* import Lamp from './Lamp/Lamp' */
import styled from 'styled-components';
import Infography from '../inphography';
import CaseProud from '../caseProud';
import { variables } from '../Styled-Components/themMode';
import { mobile, tablet } from '../Styled-Components/Responsive';
/* import {Lightbulb} from './Lamp/Lightbulb' */
import HeroPre from '../HeroContainer/HeroPre';
import Parallax from './Parallax';

/* const HeroContainer = styled.div`
position: relative;
z-index: 1;
top: ${({ $isVisible }) => ($isVisible ? '-100vh' : '0')};
left: 0;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
background-image: linear-gradient(to top, #f9f9f9, #fafafa, #fafafa, #fbfbfb, #fbfbfb, #fbfbfb, #fcfcfc, #fcfcfc, #fdfdfd, #fefefe, #fefefe, #ffffff);
opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
transition: opacity 0.5s ease;
margin-top: ${({ $isVisible }) => ($isVisible ? '0' : '-50vh')}; 
${mobile({ top: '0'})}
`; */
const Hero = () => {
  return (
  <>
  <CaseProud />
  <Infography />
  </>
  );
}

export default Hero;