import React from 'react';
import styled, { css } from 'styled-components';
import logo from '../../assets/logo.svg';
import Icon3 from '../../assets/homeAnimation/fb.svg';
import Icon4 from '../../assets/homeAnimation/insta.svg';
import Icon5 from '../../assets/homeAnimation/lupa.svg';
import Icon6 from '../../assets/homeAnimation/mail.svg';
import Icon7 from '../../assets/homeAnimation/music.svg';
import Icon8 from '../../assets/homeAnimation/rocket_1.svg';
import Icon9 from '../../assets/homeAnimation/row dowm.svg';
import Icon11 from '../../assets/homeAnimation/talk.svg';
import Icon12 from '../../assets/homeAnimation/hearth.svg';
import { variables } from '../Styled-Components/themMode';
import { Link } from 'react-router-dom';
import { mobile, tablet } from '../Styled-Components/Responsive';
import { getWiggleAnimation, getHoverAnimation, fadeIn } from '../Styled-Components/animation';

const HeroSection = styled.section`
  display: flex;
  padding: 50px 20px;
  background: linear-gradient(to bottom right, #f5f7fa, ${variables.bgColor});
  ${tablet({
    flexDirection: 'column',
    padding: '20px',
  })}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 50%;
  ${tablet({
    width: '100%',
  })}
`;

const Heading = styled.h1`
  font-size: 48px;
  color: ${variables.secondColor};
`;

const Subheading = styled.h2`
  font-size: 24px;
  color: ${variables.primaryColor};
`;

const Logo = styled.div`
  display: none;
  position: relative;
  bottom: 50%;
    left: 150%;
  transform: translate(-50%, -50%);
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
  z-index: 100;

  .container:hover & {
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${fadeIn} 1s forwards;
  }
  /* ${tablet({})}
  ${mobile({
    top: '-842px',
    left: '71px',
  })} */
`;

const Description = styled.p`
  text-wrap: balance;
  font-size: 18px;
  color: ${variables.hoverPrimaryDarkColor};
`;

const ButtonContainer = styled.div`
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 1.5rem;
`;

const Button = styled(Link)`
  padding: 15px 30px;
  font-size: 18px;
  text-decoration: none;
  margin-right: 10px;
  color: ${variables.primaryColor};
  border-radius: 20px;
  cursor: pointer;
  font-weight: ${variables.mediumBoldFont};
  transition: all .3s;  

  &:hover {
    color: ${variables.bgColor};
  }
  &:first-child {
    background: #9BC9DD;
    &:hover {
      background: #177596; 
    }
  }

  &:last-child {
    background: #FFE169;
    &:hover {
      background: #ffc107; 
    }
  }
`;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  justify-items: center;
  align-items: center;
  width: 100%;
  max-height: 90vh;
  ${tablet({
    maxHeight: '52vh',
  })}
  ${mobile({
    height: '50vh',
  })}

  &:hover div {
    animation: ${css`${getHoverAnimation()} 1s forwards`};
  }
`;

const Item = styled.div`
  width: 100%;
  height: 100%;
  min-width: 50px;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${({ duration }) => css`${getWiggleAnimation()} ${duration} cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite`};
`;

const Image = styled.img`
  object-fit: cover;
  width: ${({ width }) => width || '45%'};
  object-position: center;
`;

const HeroSell = () => {
  const duration = `${Math.floor(Math.random() * 5) + 3}s`;

  return (
    <HeroSection>
      <Container>
        <Heading>¡NO DEJES QUE TU MARCA PASE DESAPERCIBIDA!</Heading>
        <Subheading>Escríbenos y haz que todos hablen de ti</Subheading>
        <Description>
          Somos una agencia especializada en diseño de marca, diseño web, diseño multimedia y marketing digital. Transformamos tus ideas en realidad visual.
        </Description>
        <ButtonContainer>
          <Button to='/contactUs' href="#contact">Contáctanos Ahora</Button>
          <Button to='/services' href="#portfolio">Ver Nuestros Trabajos</Button>
        </ButtonContainer>
      </Container>
      <Container>
        <ImageContainer className="container">
          <Item duration={duration}>
            <Image src={Icon3} alt="Facebook" />
          </Item>
          <Item duration={duration}>
            <Image src={Icon4} alt="Instagram" />
          </Item>
          <Item duration={duration}>
            <Image width="60%" src={Icon5} alt="Lupa" />
          </Item>
          <Item duration={duration}>
            <Image src={Icon6} alt="Mail" />
          </Item>
          <Item duration={duration}>
            <Image width="30%" src={Icon7} alt="Music" />
          </Item>
          <Item duration={duration}>
            <Image width="60%" src={Icon8} alt="Rocket" />
          </Item>
          <Item duration={duration}>
            <Image src={Icon9} alt="Arrow Down" />
          </Item>
          <Item duration={duration}>
            <Image width="60%" src={Icon11} alt="Talk" />
          </Item>
          <Item duration={duration}>
            <Image width="47%" src={Icon12} alt="Heart" />
          </Item>
          <Logo>
            <Image width="300%" src={logo} alt="Logo de Krea, agencia de Diseño de marcas, diseño multimedia, diseño web y marketing digital" />
          </Logo>
        </ImageContainer>
      </Container>
    </HeroSection>
  );
};

export default HeroSell;
