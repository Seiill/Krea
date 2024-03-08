import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { variables } from '../Styled-Components/themMode';


export const List = styled.li`
  height: 100%;
  margin-top: 30px;
  padding: 0 1rem;
`;

export const Links = styled(LinkR)`
  text-decoration: none;
  color: #ec6c3d;
`;

export const Nav = styled.nav`
  background: ${({ $scrollNav }) => ($scrollNav ? variables.bgColor :'transparent' )};
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  display: block;
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 24px;
`;

export const Img = styled.img`
  height: 1.5rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;
export const NavIten = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkR)`
  color: ${({ $scrollNav }) => ($scrollNav ? variables.bgColor: variables.primaryColor )};
  font-weight: ${variables.boldFont};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &.active {
    border-bottom: 3px solid #01bf71;
  }
  &:hover{
    text-decoration: underline;
    color: ${variables.hoverSecondaryDarkColor};
  }
`;

export const NavBtn = styled.nav`
  display: felx;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: ${variables.hoverPrimaryDarkColor};
  white-space: nowrap;
  padding: 10px 22px;
  color: ${variables.bgColor};
  font-size:${variables.smallFont};
  font-weight: ${variables.mediumBoldFont};
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background: ${variables.bgColor};
    color: ${variables.hoverPrimaryDarkColor};
    border: solid 2px ${variables.hoverSecondaryDarkColor};
  }
`;

export const ScrolledNavLinks = styled(NavLinks)`
  color: #fff;
`;

export const ScrolledNavBtnLink = styled(NavBtnLink)`
  background: #fff;
  color: #2c2a4a;
`;
