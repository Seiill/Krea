import React from 'react';
import logo from '../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import { FooterContainer,StyledLink,  Title, TitleContainer, LogoContainer, Logo, SocialContainer, SocialMedia, ContactInfo, KreemosButton } from './footerElements';

const Footer = () => {
  const navigate = useNavigate();

  const handleKreemosButtonClick = () => {
    navigate('/contactUs');
  };

  return (
    <FooterContainer>
      <TitleContainer>
        <Title>
        <KreemosButton onClick={handleKreemosButtonClick}>KREEMOS</KreemosButton> un proyecto juntos !
        </Title>
      </TitleContainer>
      <SocialContainer>
        <LogoContainer>
          <Logo src={logo} alt="Logo de 'Krea' agencia creativa"/>
          <p>No solo hacemos una<br/> marca bonita,<br/>¡la hacemos visible!</p>
        </LogoContainer> 
        <SocialMedia>
          <StyledLink to="https://www.facebook.com/profile.php?id=61562504063913" target="_blank">Facebook</StyledLink>
          <StyledLink to="https://www.linkedin.com/in/katherine-camargo-9a57ba318/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">LinkedIn</StyledLink>
          <StyledLink to="https://instagram.com" target="_blank">Instagram</StyledLink>
        </SocialMedia>
        <ContactInfo>
          <a href='tel:+13213337270'>Teléfono: +1 (321) 333-7270</a>
          <a href='mailto:Kreadigitalgraphic@gmail.com'>Kreadigitalgraphic@gmail.com</a>
        </ContactInfo>
      </SocialContainer>
    </FooterContainer>
  );
};

export default Footer;
