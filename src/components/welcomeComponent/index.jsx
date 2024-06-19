import React,  { useEffect, useState } from 'react'
import { Container,  DivTextStyled, Span, Wiggle, Image, DivImage, } from './preeHomeelements'
import Icon from '../../assets/HomeIlustration.svg'

const PreHome = () => {

  return (
    <Container id="background">
      <DivTextStyled id="text">
        <Span $mobileFontSize="1.2rem"  fontSize="2.5rem" fontFamily = 'DINAlternate'letterSpacing="5.1px">
          TRABAJAMOS JUNTOS
        </Span>
        <Span fontFamily='DINAlternate' fontSize="3.5rem" $mobileFontSize="1.8rem" letterSpacing="8.2px" $textShadow="-2px -2px 0 #0F2633, 2px -2px 0 #0F2633, -2px 2px 0 #0F2633, 2px 2px 0 #0F2633">
          PARA HACERTE
        </Span>
        <Wiggle fontSize='5.3rem' $mobileFontSize="2rem" fontFamily='DINAlternate'>VISIBLE</Wiggle>
        <Span $mobileFontSize="1.4rem" fontFamily='DINAlternate' fontSize="2.5rem" letterSpacing="3.9px" $textShadow="-2px -2px 0 #0F2633, 2px -2px 0 #0F2633, -2px 2px 0 #0F2633, 2px 2px 0 #0F2633">
          EN EL MUNDO DIGITAL
        </Span>
      </DivTextStyled>
      <DivImage id="image">
        <Image
          src={Icon}
          alt="Un niño camina hacia un portal que conduce a un mundo digital. El niño está sonriendo y parece emocionado de explorar el nuevo mundo."
        ></Image>
      </DivImage>
    </Container>
  );
};

export default PreHome;