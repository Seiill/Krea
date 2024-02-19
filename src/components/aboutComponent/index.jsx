import React from 'react'
import descPersonas from '../../../public/images/profiles-image.svg'
import ImageProf from '../../assets/profOne.jpg'
import ImagePro from '../../assets/profTwo.jpeg'
import { valorData } from '../../data';
import name from '../../assets/logo.svg'
import { Container, VideoContainer,TextContainer,  AboutUsProfile, PlatformSection, EstrategyContainer, Title, Image, ValorSection, ValorCard, Description, ImageContainer, TitleFirst, IconContainer} from './aboutElements'
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
        <ValorSection>
            {valorData.map((item, index)=>(
            <ValorCard key={item.id} $index={index}>
                <Title>{item.title}</Title>
                <IconContainer>
                    <Image src={item.image} alt={item.alt}/>
                </IconContainer>
                <Description>{item.description}</Description>
                
            </ValorCard>))}
        </ValorSection>
    </Container>
  )
}

export default AboutUs