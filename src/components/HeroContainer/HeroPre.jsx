import React from 'react'
import PreHome from '../welcomeComponent';
import Lightbulb from '../hero/Lamp/Lightbulb';
import styled from 'styled-components';

const Container = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100vh;
`;
const HeroPre = () => {
  return (
    <Container>
      <PreHome />
     <Lightbulb />
    </Container>
  )
}

export default HeroPre