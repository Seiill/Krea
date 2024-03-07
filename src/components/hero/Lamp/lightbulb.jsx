import React, { useState } from 'react';
import Switch from './Switch';
import {GridContainer, Container, LeftColumn, TextContainer,  BulbLightContainer, Title, TitleHeader, Description, CenterColumn, BulbIcon, Blister, Filament, Vastago, Cap, Linecap, RightColumn } from './lightBulbElements'
const Lightbulb = () => {
    const [isSwitchOn, setSwitchOn] = useState(false);
  return (
    <Container>
      <TitleHeader>¡En nuestra agencia de diseño, la clave es tu visión! Nuestro enfoque se basa en cuatro pasos fundamentales:</TitleHeader>
    <GridContainer>
      
    <LeftColumn>
        <TextContainer>
            <Title> Escuchar </Title>
            <Description>
            Nos sumergimos en tus ideas, necesidades y objetivos. Tu voz es nuestra brújula, y estamos aquí para captar cada detalle de tu visión.
            </Description>
        </TextContainer>
        <TextContainer>
            <Title>Analizar</Title>
            <Description>Estudiamos cuidadosamente cada aspecto, evaluamos posibilidades y trazamos estrategias. Esta fase nos permite trazar el camino más sólido para convertir tu visión en realidad.</Description>
        </TextContainer>
      </LeftColumn>
      <CenterColumn>
        <BulbLightContainer>
        <BulbIcon $isswitchon={isSwitchOn}>
        <Blister>
        <Filament xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.15 28.75">
          <path className="cls-1" d="M39.78,28.75a20,20,0,0,1-11.3-3.37,22.1,22.1,0,0,1-10.07,1.49C9.05,26,1,18.79,0,10.41a1,1,0,0,1,.93-1,1,1,0,0,1,1.14.84C3,17.76,10.21,24.26,18.62,25a19.83,19.83,0,0,0,8.14-1A15.48,15.48,0,0,1,22.89,6.37C24.19,3.55,27,.4,31.07,0a9.22,9.22,0,0,1,8.75,4.86,11.5,11.5,0,0,1,.29,9.16,19.29,19.29,0,0,1-9.54,10.38,18.21,18.21,0,0,0,17,.65,1.12,1.12,0,0,1,1.42.35.89.89,0,0,1-.39,1.28A19.56,19.56,0,0,1,39.78,28.75Zm-8-26.87h-.5c-3.13.28-5.39,2.87-6.46,5.2a13.74,13.74,0,0,0,4,16.09,17.48,17.48,0,0,0,9.32-9.7,9.75,9.75,0,0,0-.19-7.79A7.21,7.21,0,0,0,31.78,1.88Z"/>
        </Filament>
            <Vastago></Vastago>
        </Blister>
        <Cap>
            <Linecap></Linecap>
        </Cap>
        </BulbIcon>
        <Switch checked={isSwitchOn} onChange={() => setSwitchOn(!isSwitchOn)} onClick={() => setSwitchOn(!isSwitchOn)} />
        </BulbLightContainer>
      </CenterColumn>
      <RightColumn>
        <TextContainer>
            <Title>Krear</Title>
            <Description>
            Nuestro equipo creativo se sumerge en el proceso de dar forma a tus ideas, utilizando nuestra experiencia y creatividad para hacerlas cobrar vida.
            </Description>
        </TextContainer>
        <TextContainer>
            <Title>Resolver</Title>
            <Description>
            Nos comprometemos a superar desafíos, encontrar soluciones innovadoras y asegurar que tu proyecto se complete con excelencia y precisión.
            </Description>
        </TextContainer>
      </RightColumn>
    </GridContainer>
    
    </Container>
  )
}

export default Lightbulb