import styled from 'styled-components';
import { Link} from 'react-router-dom';   
import { variables } from '../Styled-Components/themMode';


export const SidebarContainer = styled.div`
text-align: center; 
  width: 100%;
  height: 100%;
  background-color: ${variables.primaryColor};
  position: fixed;
  z-index: 5;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  transition: left 0.3s ease;
  display: flex; 
  justify-content: center; 
  align-items: center;
`;

export const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
`

export const SidebarItem = styled.li`
  padding: 1rem;
`;

export const SidebarLink = styled(Link)`
  text-decoration: none;
  color: ${variables.bgColor};
  font-size: ${variables.bigFont};
  font-weight: ${variables.boldFont};
`;

/* 
export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ $isOpen }) => ($isOpen ? '100%' : '0')};
  top: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: ${variables.hoverSecondaryLightColor};
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: ${variables.hoverSecondaryLightColor};
`;

export const SidebarLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: ${variables.hoverSecondaryLightColor};
  cursor: pointer;

  &:hover {
    color: ${variables.hoverPrimaryDarkColor};
    transition: 0.2s ease-in-out;
  }
`;

export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: ${variables.hoverPrimaryDarkColor};
  white-space: nowrap;
  padding: 16px 64px;
  color: ${variables.hoverPrimaryLightColor};
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2 ease-in-out;
    background: ${variables.secondColor};
    color: ${variables.hoverPrimaryDarkColor};
  }
`;
export const Links = styled(LinkR)`
text-decoration: none;
color:  ${variables.primaryColor};` */