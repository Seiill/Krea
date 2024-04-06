import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { infography } from '../../data';
import { Container, ConatinerThumbnail, Image, ImageContainer, Thumbnail, Title, Description } from './inphoGraphElements';
import Modal from './modal';
import icon1 from '../../assets/Infografia-Diseño-Web.svg';
import icon2 from '../../assets/Infografia-Imagen-Corporativa.svg';
import icon3 from '../../assets/Infografia-rrss.svg';
import diseñoWeb from '../../assets/pdf/diseño-web.pdf';
import imagenCorp from '../../assets/pdf/imagen-corporativa.pdf';
import rrssSociales from '../../assets/pdf/rrss-sociales.pdf';

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
  const [showCards, setShowCards] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4 // Cambiar el umbral a 40%
    };

    const observer = new IntersectionObserver(([entry]) => {
      setShowCards(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const selectInfography = (index) => {
    setCurrentInfography(infography[index]);
  };

  const closeInfography = () => {
    setCurrentInfography(null);
  };

  return (
    <Container ref={ref}>
      <Title>Descubre nuestras infografías y visualiza el brillante horizonte para tu éxito empresarial. Juntos, construyamos el camino hacia el logro de tus metas.</Title>
      <ConatinerThumbnail>
        {infography.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }} // Animación inicial desde la izquierda
            animate={{ opacity: showCards ? 1 : 0, x: showCards ? 0 : -20 }} // Animación al ser visible
            transition={{ delay: index * 0.1 }} // Retraso progresivo
          >
            <Thumbnail onClick={() => selectInfography(index)}>
              <ImageContainer><Image src={getIconPath(item.icon)} alt={item.title} /></ImageContainer>
              <Description>{item.title}</Description>
            </Thumbnail>
          </motion.div>
        ))}
      </ConatinerThumbnail>
      {currentInfography && (
        <Modal onClose={closeInfography} pdfUrl={getPDFPath(currentInfography.icon)} title={currentInfography.title} />
      )}
    </Container>
  );
};

export default Infography;
