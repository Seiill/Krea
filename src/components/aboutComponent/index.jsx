import React from 'react'
import { GiThreeFriends } from "react-icons/gi";
import { FaHeartbeat } from "react-icons/fa";
import { GiHolyGrail } from "react-icons/gi";
import { GrConnect } from "react-icons/gr";
import descPersonas from '../../assets/profiles-image.svg'
import ImageProf from '../../assets/profOne.jpg'
import ImagePro from '../../assets/profTwo.jpeg'
import { valorData } from '../../data';
import name from '../../assets/logo.svg'
import { Container, VideoContainer,TextContainer, Titles, SectionContainer, AboutUsProfile, PlatformSection, EstrategyContainer, Title, Image, ValorSection, ValorCard, Description, ImageContainer, TitleFirst, IconContainer} from './aboutElements'
const AboutUs = () => {
  return (
    <Container>
        <VideoContainer>
            <TextContainer>
                <TitleFirst>Krea nuevos objetivos</TitleFirst>
            </TextContainer>
            <AboutUsProfile>
                <ImageContainer><Image src={descPersonas} alt="Imagen CEO KREA"/></ImageContainer>
            </AboutUsProfile>
        </VideoContainer>
        {/* <PlatformSection>
            <EstrategyContainer>
                <Title>Profile One</Title>
                <ImageContainer><Image src={ImagePro} alt="Imagen CEO KREA"/></ImageContainer>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae libero a mi suscipit cursus. Nulla venenatis et massa ac.</Description>
            </EstrategyContainer>
            <EstrategyContainer>
                <Title>Profile Two</Title>
                <ImageContainer><Image src={ImageProf} alt="Imagen CtO KREA"/></ImageContainer>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae libero a mi suscipit cursus. Nulla venenatis et massa ac.</Description>
            </EstrategyContainer>
        </PlatformSection> */}
        <SectionContainer>
        <Titles> Nuestros Valores</Titles>
        <ValorSection>
            {valorData.map((item, index)=>(
            <ValorCard key={item.id} $index={index}>
                <Title>{item.title}</Title>
                <IconContainer>
                {item.icon === 'GrConnect' && <GrConnect />}
              {item.icon === 'GiHolyGrail' && <GiHolyGrail />}
              {item.icon === 'GiThreeFriends' && <GiThreeFriends />}
              {item.icon === 'FaHeartbeat' && <FaHeartbeat />}
                </IconContainer>
                <Description>{item.description}</Description>
                
            </ValorCard>))}
        </ValorSection>
        </SectionContainer>
        
    </Container>
  )
}

export default AboutUs