import React, { useState } from 'react';
import { infography } from '../../data';
import { Container, Wrapper, Image, ImageContainer,Thumbnail, Title, Description } from './inphoGraphElements'; 
import Modal from './modal'
import icon1 from '../../assets/Infografia-Diseño-Web.jpg';
import icon2 from '../../assets/Infografia-Imagen-Corporativa.jpg';
import icon3 from '../../assets/prehome image.svg';
import diseñoWeb from '../../assets/pdf/diseño-web.pdf';
import imagenCorp from '../../assets/pdf/imagen-corporativa.pdf';
import rrssSociales from '../../assets/pdf/rrss-sociales.pdf'
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
const getPDFPath = (iconName) => {
  switch (iconName) {
    case 'icon1':
      return diseñoWeb;
    case 'icon2':
      return imagenCorp;
    case 'icon3':
      return rrssSociales;
    default:
      return '';
  }
};

const Infography = () => {
  const [currentInfography, setCurrentInfography] = useState(null);

  const selectInfography = (index) => {
    setCurrentInfography(infography[index]);
  };

  const closeInfography = () => {
    setCurrentInfography(null);
  };

  return (
    <Container>
      <Title>Descubre nuestras infografías y visualiza el brillante horizonte para tu éxito empresarial. Juntos, construyamos el camino hacia el logro de tus metas.</Title>
      <div style={{display:'flex'}}>
      {infography.map((item, index) => (
        <Thumbnail key={item.id} onClick={() => selectInfography(index)}>
          <ImageContainer><Image src={getIconPath(item.icon)} alt={item.title} /></ImageContainer>
          <Description>{item.title}</Description>
        </Thumbnail>
      ))}
      </div>
      {currentInfography && (
              <Modal onClose={closeInfography} pdfUrl={getPDFPath(currentInfography.icon)} title={currentInfography.title} />
     
      )}
    </Container>
  );
};

export default Infography;

