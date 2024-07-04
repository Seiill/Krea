import React from 'react';
import styled,{ css } from 'styled-components';
import logo from '../../assets/logo.svg'
import Icon2 from '../../assets/homeAnimation/bg share_1.png'
import Icon3 from '../../assets/homeAnimation/fb.svg'
import Icon4 from '../../assets/homeAnimation/insta.svg'
import Icon5 from '../../assets/homeAnimation/lupa.svg'
import Icon6 from '../../assets/homeAnimation/mail.svg'
import Icon7 from '../../assets/homeAnimation/music.svg'
import Icon8 from '../../assets/homeAnimation/rocket_1.svg'
import Icon9 from '../../assets/homeAnimation/row dowm.svg'
import Icon10 from '../../assets/homeAnimation/rowup.svg'
import Icon11 from '../../assets/homeAnimation/talk.svg'
import Icon12 from '../../assets/homeAnimation/hearth.svg'
import { variables } from '../Styled-Components/themMode';
import { Link } from 'react-router-dom';
import {mobile, tablet} from '../Styled-Components/Responsive'
import { getWiggleAnimation, getHoverAnimation, fadeIn} from '../Styled-Components/animation';

const HeroSection = styled.section`
display: flex;
 
  padding: 50px 20px;
  background: linear-gradient(to bottom right, #f5f7fa, ${variables.bgColor});
  ${tablet(
    {flexDirection: 'column',
    padding: '20px',}
  )}
`;
const Container =styled.div`
display: flex;
    flex-direction: column;
    justify-content: center;
 text-align: center;
width: 50%;
${tablet(
  {width: '100%'}
)}`

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
  top:-500px;
  left: -56px;
  transform: translate(-50%, -50%);
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
  z-index: 100;

  .container:hover & {
    display: block;
    animation: ${fadeIn} 1s forwards;
   
  }
    ${tablet({

    })}
    ${mobile({
      top: '-842px',
      left:'71px',
    })}
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

  &:hover{
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
display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
width: 100%;
overflow: hidden;
max-height: 90vh;
${tablet(
  {maxHeight: '52vh',}
)};
${mobile({
  height: '50vh',
 })}:
`
const Item = styled.div`
  position: relative;
  width: fit-content;
  z-index: ${({ $zIndex }) => $zIndex};
  top: ${({ $pTop }) => $pTop};
  bottom: ${({ $pBottom }) => $pBottom};
  left: ${({ $pLeft }) => $pLeft};
  right: ${({ $pRight }) => $pRight};
  animation: ${({ $duration }) => css`${getWiggleAnimation()} ${$duration} cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite`};
  ${({ $hoverDirection }) => $hoverDirection && css`
    .container:hover & {
      animation: ${getHoverAnimation($hoverDirection)} 1s forwards;
    }
  `};
  ${mobile`
    top: ${({ $mobileTop }) => $mobileTop || $pTop};
    bottom: ${({ $mobileBottom }) => $mobileBottom || $pBottom};
    left: ${({ $mobileLeft }) => $mobileLeft || $pLeft};
    right: ${({ $mobileRight }) => $mobileRight || $pRight};
  `}
  ${tablet`
    top: ${({ $tabletTop }) => $tabletTop || $pTop};
    bottom: ${({ $tabletBottom }) => $tabletBottom || $pBottom};
    left: ${({ $tabletLeft }) => $tabletLeft || $pLeft};
    right: ${({ $tabletRight }) => $tabletRight || $pRight};
  `}
`;

const Image = styled.img`   
object-fit: cover;
width: ${props => props.width || '45%'};
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
        <Button to='/services'href="#portfolio">Ver Nuestros Trabajos</Button>
      </ButtonContainer>
      </Container>
      <Container>
      <ImageContainer className="container">
        
        <Item  $pTop='380px' $pLeft='70px' $zIndex='1' >
          <Image  width='170%' src={Icon2} alt="" />
        </Item >
        
        
        <Item $duration={duration} $zIndex='10' $pTop='700px' $mobileTop='500px' $mobileLeft='102px' $pLeft='60px' $hoverDirection='top-left'>
            <Image src={Icon3} alt="" />
          </Item>
          <Item $duration={duration} $zIndex='5' $mobileTop='274px' $mobileRight='121px' $pTop='100px' $pRight='40px' $hoverDirection='bottom-right'>
            <Image src={Icon4} alt="" />
          </Item>

<Item $duration={duration} $pBottom='0px' $pLeft='50px' $zIndex='7' $hoverDirection='left'>
  <Image width='60%' src={Icon5} alt="" />
</Item>

<Item $duration={duration} $pTop='70px' $pLeft='50px' $zIndex='6' $hoverDirection='right'>
  <Image src={Icon6} alt="" />
</Item>

<Item $duration={duration} $pBottom='70px' $pRight='390px' $zIndex='4' $hoverDirection='top-right'>
  <Image width='30%' src={Icon7} alt="" />
</Item>

<Item $duration={duration} $zIndex='8' $pBottom='420px' $pLeft='150px' $hoverDirection='bottom-left'>
  <Image width='60%' src={Icon8} alt="" />
</Item>

<Item $duration={duration} $pBottom='30px' $pRight='300px' $zIndex='3' $hoverDirection='up'>
  <Image src={Icon9} alt="" />
</Item>

<Item $duration={duration} $pLeft='360px' $pBottom='480px' $zIndex='4' $hoverDirection='down'>
  <Image src={Icon10} alt="" />
</Item>

<Item $duration={duration} $pBottom='540px' $pRight='300px' $zIndex='2' $hoverDirection='bottom-right'>
  <Image width='60%' src={Icon11} alt="" />
</Item>

<Item $duration={duration} $zIndex='11' $pBottom='400px' $pLeft='157px' $hoverDirection='top'>
  <Image width='47%' src={Icon12} alt="" />
</Item>
<Logo>
<Image width='150px'src={logo} alt="Logo de Krea, agencia de Diseño de marcas, diseño multimedia, diseño web y marketing digital" />
</Logo>
       </ImageContainer>
        
        </Container>
    </HeroSection>
  );
};

export default HeroSell;
