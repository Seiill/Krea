import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { variables } from '../components/Styled-Components/themMode';

export const StyledLink =styled(Link)`
color: ${variables.bgColor};
text-decoration: none; 
font-size: 18px;
padding: 5px 0;
`
export const FooterContainer = styled.footer`
  background-color: ${variables.hoverPrimaryDarkColor};
  color: ${variables.bgColor};
  padding: 1.5rem;
`;
export const LogoContainer= styled.div`
display: flex;
column-gap: 1rem;
align-items: flex-end;
`
export const TitleContainer= styled.div`
width: 100%;
display:flex;
justify-content: center;
`
export const Title = styled.h2`
  font-size: ${variables.bigFont};
  padding: 2rem 0;
`;

export const KreemosButton = styled.button`
  background-color: ${variables.secondColor};
  color: ${variables.bgColor};
  font-weight: ${variables.mediumBoldFont};
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${variables.hoverSecondaryDarkColor};
  }
`;
export const SocialContainer = styled.div`
width: 100%;
min-width: 350px;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
}
`;
export const Logo = styled.img`
filter: brightness(0) invert(1);
width: 5rem;
padding: 1rem 0;
`;

export const SocialMedia = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
`;

export const ContactInfo = styled.div`
display: flex;
flex-direction: column;
justify-content:  flex-end;
align-items: flex-start;
`;
