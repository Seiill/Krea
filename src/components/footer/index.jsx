import React from 'react';
import logo from '../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import { FooterContainer,/* StyledLink, */  Title, TitleContainer, LogoContainer, Logo, SocialContainer, /* SocialMedia, */ ContactInfo, KreemosButton } from './footerElements';

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
       {/*  <SocialMedia>
          <StyledLink to="https://facebook.com" target="_blank">Facebook</StyledLink>
          <StyledLink to="https://linkedin.com" target="_blank">LinkedIn</StyledLink>
          <StyledLink to="https://instagram.com" target="_blank">Instagram</StyledLink>
        </SocialMedia>  */}
        <ContactInfo>
          <p>Teléfono: +1 321-333-7270</p>
          <p>Correo: Kreadigitalgraphic@gmail.com</p>
        </ContactInfo>
      </SocialContainer>
    </FooterContainer>
  );
};

export default Footer;
