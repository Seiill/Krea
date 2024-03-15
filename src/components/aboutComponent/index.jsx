import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { GiThreeFriends } from "react-icons/gi";
import { FaHeartbeat } from "react-icons/fa";
import { GiHolyGrail } from "react-icons/gi";
import { GrConnect } from "react-icons/gr";
import descPersonas from '../../assets/profiles-image.svg'
import { valorData } from '../../data';
import name from '../../assets/logo.svg'
import { Container, VideoContainer, TextContainer, Titles, SectionContainer, AboutUsProfile, PlatformSection, EstrategyContainer, Title, Image, ValorSection, ValorCard, Description, ImageContainer, TitleFirst, IconContainer} from './aboutElements';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { top, bottom } = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (top < windowHeight * 0.6 && bottom > 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container>
      <motion.div style={{ width: '100%' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <VideoContainer>
          <TextContainer>
            <TitleFirst>Krea nuevos objetivos</TitleFirst>
          </TextContainer>
          <AboutUsProfile>
            <ImageContainer>
              <Image src={descPersonas} alt="Imagen CEO KREA" />
            </ImageContainer>
          </AboutUsProfile>
        </VideoContainer>
      </motion.div>
      
      <SectionContainer>
        <Titles>Nuestros Valores</Titles>
        <ValorSection ref={ref}>
          {valorData.map((item, index)=>(
            <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ delay: index * 0.2, duration: 0.5 }}>
              <ValorCard>
                <Title>{item.title}</Title>
                <IconContainer>
                  {item.icon === 'GrConnect' && <GrConnect />}
                  {item.icon === 'GiHolyGrail' && <GiHolyGrail />}
                  {item.icon === 'GiThreeFriends' && <GiThreeFriends />}
                  {item.icon === 'FaHeartbeat' && <FaHeartbeat />}
                </IconContainer>
                <Description>{item.description}</Description>
              </ValorCard>
            </motion.div>
          ))}
        </ValorSection>
      </SectionContainer>
    </Container>
  );
};

export default AboutUs;
