import React, { useState } from 'react';
import { caseProud } from '../../data';
import { Container, Wrapper,Description,Image,Article, ButtonContainer, ButtonNext, ImageContainer } from './caseProudElements';
import icon1 from '../../assets/prehome image.svg';
import icon2 from '../../assets/prehome image.svg';
import icon3 from '../../assets/prehome image.svg';
import icon4 from '../../assets/prehome image.svg';
const getIconPath = (iconName) => {
    switch (iconName) {
      case 'icon1':
        return icon1;
      case 'icon2':
        return icon2;
      case 'icon3':
        return icon3;
      case 'icon4':
        return icon4;
        default:
          return '';
    }
  };
const CaseProud = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const goToPrevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? caseProud.length - 1 : prevIndex - 1
      );
    };
  
    const goToNextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === caseProud.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    return (
      <Container>
        
        {caseProud.map((item, index) => (
          <Wrapper key={item.id} style={{ display: index === currentIndex ? 'flex' : 'none' }}>
            <ImageContainer>
            <Image src={getIconPath(item.icon)} alt={item.title} />
            </ImageContainer>
            <Article>
            <Description>{item.description}</Description>
            <ButtonContainer>
            <ButtonNext onClick={goToPrevSlide}>&lt;&lt; Anterior </ButtonNext>
            <ButtonNext onClick={goToNextSlide}>Siguiente &gt;&gt;</ButtonNext>
            </ButtonContainer>
            </Article>
          </Wrapper>
        ))}
      </Container>
    );
  };
  
  export default CaseProud;