import React,{useState} from 'react';
import Offers from '../../offers/offers';
import { ShowContainer, SectionContainer, GridContainer, ViewFeatures, H3, P, Img, IfContainer, Title, ImageContainer, ImageGrid, ImageWrapper} from './navElements';

import image from '../../assets/services-selected-03.svg';
import bsaBrand from '../../assets/bsa-brand.svg';
import bsaLogo from '../../assets/bsa-logo.svg'; 
import bsaCard from '../../assets/bsa-card.svg';

import sifBrand from '../../assets/sif-brand.svg';
import sifLogo from '../../assets/sif-logo.svg';
import sifCard from '../../assets/sif-card.svg';

import sifWeb1 from '../../assets/sif-web1.jpg';
import sifWeb2 from '../../assets/sif-web2.jpg';
import sifWeb3 from '../../assets/sif-web3.jpg';

import eWeb1 from '../../assets/e-web1.jpg';
import eWeb2 from '../../assets/e-web2.jpg';
import eWeb3 from '../../assets/e-web3.jpg';

import sft1 from '../../assets/sft1.jpg';
import sft2 from '../../assets/sft2.jpg';
import sft3 from '../../assets/sft3.jpg';

import jedanRrss from '../../assets/mockup-two-jedan-80.jpg';
import jedanRrss2 from '../../assets/rrss2-80.jpg';
import jedanRrss3 from '../../assets/rrss2-80.jpg';


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
  'sif-web1': sifWeb1,
  'sif-web2': sifWeb2,
  'sif-web3': sifWeb3,
  'e-web1': eWeb1,
  'e-web2': eWeb2,
  'e-web3': eWeb3,
  'sft1': sft1,
  'sft2': sft2,
  'sft3': sft3,
  'rrss1': jedanRrss,
  'rrss2': jedanRrss2,
  'rrss3': jedanRrss3,
  
};

const importImages = (imageNames) => {
  return imageNames.map((imageName) => imageMap[imageName]);
};

const ShowServices = ({ selectedService }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  if (!selectedService) {
    return (
      <IfContainer>
        <H3>Te invitamos a elegir el servicio que desees conocer</H3>
        <Img src={image} alt="Ilustración de una niña seleccionando opciones de un menú de servicios, RRSS, Diseño web, Branding y Multimedia" />
      </IfContainer>
    );
  }
  console.log("Valor de selectedService.types:", selectedService.types);
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
      <ViewFeatures onClick={openModal} style={{ position: 'fixed', bottom: '100px', right: '34px'}}>Ver Planes</ViewFeatures>
      {isModalOpen && <Offers category={selectedService.types} onClose={closeModal} />} 
    
    </ShowContainer>
  );
};

export default ShowServices;
