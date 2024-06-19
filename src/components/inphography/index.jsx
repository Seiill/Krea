import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { infography } from '../../data';
import { Container, ConatinerThumbnail, Image, ImageContainer, Thumbnail, Title, Description } from './inphoGraphElements';
import Modal from './modal';
import icon1 from '../../assets/Infografia-Diseño-Web.jpeg';
import icon2 from '../../assets/Infografia-Imagen-Corporativa.jpeg';
import icon3 from '../../assets/Infografia-rrss.jpeg';
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
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

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
    const selectedInfography = infography[index];
    const pdfPath = getPDFPath(selectedInfography.icon);
    if (pdfPath) {
      window.open(pdfPath, '_blank');
    }
  };

  return (
    <Container ref={ref}>
      <Title>Descubre nuestras infografías y visualiza el brillante horizonte para tu éxito empresarial. Juntos, construyamos el camino hacia el logro de tus metas.</Title>
      <ConatinerThumbnail>
        {infography.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: index * 0.1 }}
          >
            <Thumbnail onClick={() => selectInfography(index)}>
              <ImageContainer><Image src={getIconPath(item.icon)} alt={item.title} /></ImageContainer>
              <Description>{item.title}</Description>
            </Thumbnail>
          </motion.div>
        ))}
      </ConatinerThumbnail>
    </Container>
  );
};

export default Infography;
