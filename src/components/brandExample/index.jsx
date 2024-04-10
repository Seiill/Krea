import React from 'react'
import { Container, Banner, Shapes, Text, LogoWhite, Section, Description, LeftColumn, RightColumn, ColorGrid, Img, ColorDiv, ColorName, Grid, ContainerSection, ImageContainer } from './brandExampleElements'
import logoColor from '../../assets/log-jedan-color.svg';
import target from '../../assets/jedanCardOne.jpg';
import webImage from '../../assets/jedanMockupOne.jpg';
import mobile from '../../assets/jedanWebMobile.jpg';
import webMockup from '../../assets/webmockup-2.svg';
import socialImage from '../../assets/mockup-two-jedan-80.jpg';
import mockup from '../../assets/jedn.jpg';
import whiteLogo from '../../assets/log-jedan-white.svg'
import bg from '../../assets/jedan-banner-one.svg'
const BrandExample = () => {
  const colors = ['#253E8E', '#7484B7', '#FAB223', '#FFD386', '#D28E29'];


  return (
    <Container>
        <Banner>
            <Shapes src={bg} alt="imagen con símbolos de ocnstrucción usados como adorno en JEDAN"/>
            <LogoWhite  src={whiteLogo} alt="logo blanco de Jedan" />
        </Banner>
        <Section>
      <Grid>
      <Description><Text>Desde los cimientos de la planificación estratégica hasta los toques finales de
la ejecución creativa, te llevaremos paso a paso a través de cada etapa de
este apasionante proceso. Verás cómo cada decisión, cada color y cada
palabra contribuyen a dar forma a la personalidad y la imagen de la marca,
reflejando su visión, valores y compromiso con la excelencia.</Text></Description>
      <LeftColumn><ImageContainer width="40%"><Img src={logoColor} alt="logo a color de JEDAN " /></ImageContainer></LeftColumn>
      <RightColumn><ImageContainer><Img src={target} alt="mockup tarjetas corporativas de JEDAN "/></ImageContainer></RightColumn>
</Grid>
        </Section>
        <Section>
        <ColorGrid>
        {colors.map((color, index) => (
        <ColorDiv key={index} color={color}>
          <ColorName>{color}</ColorName>
        </ColorDiv>
      ))}
      </ColorGrid>
      </Section>
        <Section>
          <Img src={webImage}  alt="mockup sitio web JEDAN" />
        </Section>
      <Section>
          <ContainerSection>
            <ImageContainer src={mobile} alt=""/>
            <ImageContainer src={webMockup} alt=""/>
          </ContainerSection>
        </Section>
        <Section>
          <Img src={mockup}  alt="mockup sitio web escritorio y mobile JEDAN" />
        </Section>
        <Section>
          <Img src={socialImage}  alt="mockup redes sociales JEDAN" />
        </Section>
    </Container>
  )
}

export default BrandExample