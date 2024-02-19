import styled from 'styled-components';
import { variables } from '../../Styled-Components/themMode';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex:1;
  width: 100%;
  max-width: 1280px;
  margin-top: 15%;
  
`;

export const Title = styled.h2`
color: ${variables.bgColor};
width: 40%;
text-align: center;
margin: 2rem auto;
padding: 20px 0;
`
export const LampContainer = styled.div`
width: 100%;
display: flex;
padding-bottom: 40px;
flex-wrap: wrap;
justify-content: center;
`

export const Lampara = styled.div`
  align-items: center;
  width: 300px;
  /* border-bottom: 10px solid #fff; */
  position: relative;
`;

export const Cable = styled.div`
  width: 2px;
  margin: auto;
  background-color: ${variables.hoverPrimaryLightColor};
  height: 200px;
`;

export const Caja = styled.div`
  width: 120px;
  height: 40px;
  background-color: ${variables.primaryColor};
  margin: auto;
  border-radius: 30px 30px 0 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Luz = styled.div`
  max-width: 400px;
  margin: auto;
  height: 200px;
  clip-path: polygon(34% 0, 66% 0, 100% 100%, 0 100%);
  padding-top: 40px;
  background: ${({ $encendida }) =>
    $encendida
      ? 'linear-gradient(rgba(246, 236, 169,1), rgba(255,255,255,.9))'
      : 'none'};
`;

export const Texto = styled.span`
  position: absolute;
  top: 270px;q<
  font-size: ${variables.semimediumFont};
  font-weight: ${variables.boldFont};
  width: 100%;
  text-align: center;
  color: ${({ $encendida }) => ($encendida ? variables.hoverSecondaryDarkColor : variables.primaryColor)};
  letter-spacing: 3px;
`;
export const Description = styled.p`
    position: relative;
    font-size: ${variables.smallFont};
    font-weight: ${variables.mediumBoldFont };
    width: 52%;
    overflow-wrap: break-word;
    text-align: center;
    white-space: normal;
    margin: 0 auto;
    margin-top: -166px;
color: ${({ $encendida }) => ($encendida ? variables.hoverPrimaryDarkColor : 'rgb(76, 77, 90)')};
`;

export const Input = styled.input`
  accent-color: ${variables.hoverSecondaryLightColor};
  cursor: pointer;
`;