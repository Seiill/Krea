import React,  { useEffect, useState } from 'react'
import { Container, /* DivText, */ DivTextStyled, Span, Wiggle, Image, DivImage, } from './preeHomeelements'
import Icon from '../../assets/HomeIlustration.svg'
/* const PreHome = () => {
    const [scrolled, setScrolled] = useState(false);
    const [scrollDirection, setScrollDirection] = useState('down');

    useEffect(() => {
        const threshold = 40;
        const handleScroll = () => {
          const scrollY = window.scrollY;
          setScrolled(scrollY > threshold);
          setScrollDirection(scrollY > threshold ? 'down' : 'up');
        };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
    <Container>
        <DivText $scrolled={scrolled} $scrollDirection={scrollDirection}>
            <Span fontSize="2.5rem"letterSpacing="3.1px">TRABAJAMOS JUNTOS</Span>
            <Span fontSize="3.5rem" letterSpacing="7px" $textShadow="-2px -2px 0 #0F2633, 2px -2px 0 #0F2633, -2px 2px 0 #0F2633, 2px 2px 0 #0F2633">PARA HACERTE</Span>
            <Wiggle>VISIBLE</Wiggle>
            <Span fontSize="2.5rem" letterSpacing="2.7px" $textShadow="-2px -2px 0 #0F2633, 2px -2px 0 #0F2633, -2px 2px 0 #0F2633, 2px 2px 0 #0F2633" >EN EL MUNDO DIGITAL</Span>
        </DivText>
        <DivImage $scrolled={scrolled} $scrollDirection={scrollDirection}>
            <Image src={Icon} alt="Un niño camina hacia un portal que conduce a un mundo digital. El niño está sonriendo y parece emocionado de explorar el nuevo mundo."
></Image>
        </DivImage>
    </Container>
  )
}

export default PreHome */
const PreHome = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const threshold = 40;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > threshold);
      setScrollDirection(scrollY > threshold ? 'down' : 'up');
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrolled && scrollDirection === 'down') {
      setHasScrolled(true);
    }
  }, [scrolled, scrollDirection]);

  return (
    <Container>
      <DivTextStyled $scrolled={scrolled} $scrollDirection={scrollDirection} $hasScrolled={hasScrolled}>
        <Span fontSize="2.5rem" fontFamily = 'DINAlternate'letterSpacing="5.1px">
          TRABAJAMOS JUNTOS
        </Span>
        <Span fontFamily='DINAlternate' fontSize="3.5rem" letterSpacing="8.2px" $textShadow="-2px -2px 0 #0F2633, 2px -2px 0 #0F2633, -2px 2px 0 #0F2633, 2px 2px 0 #0F2633">
          PARA HACERTE
        </Span>
        <Wiggle fontFamily='DINAlternate'>VISIBLE</Wiggle>
        <Span fontFamily='DINAlternate' fontSize="2.5rem" letterSpacing="3.9px" $textShadow="-2px -2px 0 #0F2633, 2px -2px 0 #0F2633, -2px 2px 0 #0F2633, 2px 2px 0 #0F2633">
          EN EL MUNDO DIGITAL
        </Span>
      </DivTextStyled>
      <DivImage $scrolled={scrolled} $scrollDirection={scrollDirection} $hasScrolled={hasScrolled}>
        <Image
          src={Icon}
          alt="Un niño camina hacia un portal que conduce a un mundo digital. El niño está sonriendo y parece emocionado de explorar el nuevo mundo."
        ></Image>
      </DivImage>
    </Container>
  );
};

export default PreHome;