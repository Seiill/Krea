import React, { useState } from 'react';
import { infography } from '../../data';
import { Container, Wrapper, Image } from './inphoGraphElements';
import SlideButton from '../Styled-Components/SlideButton';
import icon1 from '../../assets/Infografia-Diseño-Web.jpg';
import icon2 from '../../assets/Infografia-Imagen-Corporativa.jpg';
import icon3 from '../../assets/prehome image.svg';

const getIconPath = (iconName) => {
  switch (iconName) {
    case 'icon1':
      return icon1;
    case 'icon2':
      return icon2;
    case 'icon3':
      return icon3;
    default:
      return '';
  }
};

const Infography = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? infography.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === infography.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Container>
      <SlideButton direction="prev" onClick={goToPrevSlide} />
      {infography.map((item, index) => (
        <Wrapper key={item.id} style={{ display: index === currentIndex ? 'flex' : 'none' }}>
          <Image src={getIconPath(item.icon)} alt={item.title} />
        </Wrapper>
      ))}
      <SlideButton direction="next" onClick={goToNextSlide} />
    </Container>
  );
};

export default Infography;
