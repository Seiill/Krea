import React, { useState, useEffect } from 'react';
import { ShowContainer, ImageContainer,Content, ButtonContainer,ViewFeatures, Aside, H1, H3, H2, P, Img, IfContainer } from './navElements';
import image from '../../assets/selectedOption.svg';
import SlideButton from '../Styled-Components/SlideButton';

import prehomeImage from '../../assets/prehome image.svg';
import estadisticImage from '../../assets/estadistic.svg';
import selectedOptionImage from '../../assets/selectedOption.svg';
import Navigation from './Navigation';
import bsaBrand from '../../assets/bsa-brand.jpg'
import bsaModel from '../../assets/bsa-models.jpg'
import jedanBrand from '../../assets/jedan-brand.jpg'
import jedanWeb from '../../assets/jedan-web.jpg'
import sifBrand from '../../assets/sif-brand.jpg'
import sifModel from '../../assets/sif-models.jpg'
const imageMap = {
  'bsa-brand': bsaBrand,
  'bsa-models': bsaModel,
  'jedan-brand': jedanBrand,
  'jedan-web': jedanWeb,
  'sif-brand': sifBrand,
  'sif-models': sifModel,
  'estadistic': estadisticImage,
  'selectedOption': selectedOptionImage,
};

const importImages = (imageNames) => {
  return imageNames.map((imageName) => imageMap[imageName]);
};

const ShowServices = ({ selectedService,  onSelectService, servicesData}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? loadedImages.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === loadedImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedService]);
  const [loadedImages, setLoadedImages] = useState([]);


  useEffect(() => {
    if (selectedService) {
      const images = importImages(selectedService.images);
      setLoadedImages(images);
    }
  }, [selectedService]);

  if (!selectedService) {
    return (
      <IfContainer>
        <H1>Bienvenido</H1>
        <H3>Te invitamos a elegir el servicio que desees conocer</H3>
        <Img src={image} alt="Dibujo de niña seleccionando opciones de un menú" />
        <Navigation services={servicesData} onSelectService={ onSelectService} />
      </IfContainer>
    );
  }

  const { title, description } = selectedService;

  return (
    <ShowContainer>
    <Aside>
      <H2>{title}</H2>
      <P>{description}</P>
      <ViewFeatures>Ver Planes</ViewFeatures>
    </Aside>
    <ImageContainer>
    
      {loadedImages.map((image, index) => (
        <Content key={index} style={{ display: index === currentIndex ? 'block' : 'none' }}>
        <Img src={image} alt={`Imagen ${index + 1}`} /> 
        </Content>
      ))}
      <ButtonContainer><SlideButton direction="prev" onClick={goToPrevSlide} />
      <SlideButton direction="next" onClick={goToNextSlide} /></ButtonContainer>
    </ImageContainer>
  </ShowContainer>
  );
};

export default ShowServices;
