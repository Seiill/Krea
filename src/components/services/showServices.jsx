import React from 'react';
import { ShowContainer, SectionContainer, GridContainer, ViewFeatures, H3, P, Img, IfContainer, Title, ImageContainer, ImageGrid, ImageWrapper} from './navElements';

import image from '../../assets/services-selected-03.svg';
import bsaBrand from '../../assets/bsa-brand.svg';
import bsaLogo from '../../assets/bsa-logo.svg'; 
import bsaCard from '../../assets/bsa-card.svg';

import sifBrand from '../../assets/sif-brand.svg';
import sifLogo from '../../assets/sif-logo.svg';
import sifCard from '../../assets/sif-card.svg';

import jedanBrand from '../../assets/jedan-brand.svg';
import jedanLogo from '../../assets/jedan-logo.svg';
import jedanCard from '../../assets/jedan-card.svg';
const imageMap = {
  'bsa-brand': bsaBrand,
  'bsa-logo': bsaLogo,
  'bsa-card': bsaCard,
  'sif-brand': sifBrand,
  'sif-logo': sifLogo,
  'sif-card': sifCard,
  'jedan-brand': jedanBrand,
  'jedan-logo': jedanLogo,
  'jedan-card': jedanCard,
  
};

const importImages = (imageNames) => {
  return imageNames.map((imageName) => imageMap[imageName]);
};

const ShowServices = ({ selectedService }) => {
  console.log("selectedService en ShowServices:", selectedService);

  if (!selectedService) {
    return (
      <IfContainer>
        <H3>Te invitamos a elegir el servicio que desees conocer</H3>
        <Img src={image} alt="Ilustración de una niña seleccionando opciones de un menú de servicios, RRSS, Diseño web, Branding y Multimedia" />
      </IfContainer>
    );
  }

  return (
    <ShowContainer>
      <SectionContainer >
        <Title>{selectedService.title}</Title>
        {selectedService.jobs.map((job, index) => (
          <GridContainer key={index}>
            <P>{job.description}</P>
            <ImageGrid>
              <ImageWrapper>
                {importImages(job.images.slice(0, 2)).map((imageSrc, index) => (
                  <ImageContainer key={index}>
                    <Img src={imageSrc} alt={job.images[index]} />
                  </ImageContainer>
                ))}
              </ImageWrapper>
              <ImageContainer>
                <Img src={imageMap[job.images[2]]} alt={job.images[2]} />
              </ImageContainer>
            </ImageGrid>
          </GridContainer>
        ))}
      </SectionContainer>
      <ViewFeatures>Ver Planes</ViewFeatures>
    </ShowContainer>
  );
};

export default ShowServices;
