import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons/lib';
import styled from 'styled-components';
import { variables } from '../Styled-Components/themMode';
import IconLogo from '../../assets/logoKrea.svg';
import { Nav, NavbarContainer, Img, NavLogo, MobileIcon, NavMenu, NavIten, NavLinks, NavBtn, NavBtnLink } from './navbarelements';
import { navItems } from '../../data';
import { FaBars } from 'react-icons/fa';

const StyledFaBars = styled(FaBars)`
  color: ${({ $isOpen }) => ($isOpen ? variables.primaryColor : variables.bgColor)};
`;

const Navbar = ({ toggle }) => {
  const [$scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 20) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);

    return () => {
      window.removeEventListener('scroll', changeNav);
    };
  }, []);

  const toggleHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#2C2A4A3' }}>
        <Nav $scrollNav={$scrollNav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>
              <Img src={IconLogo} alt="Logo" />
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <StyledFaBars $isOpen={$scrollNav} />
            </MobileIcon>
            <NavMenu>
              {navItems.map((item) => (
                <NavIten key={item.id}>
                  <NavLinks to={item.path} className={$scrollNav ? 'scrolled' : ''}>
                    {item.title}
                  </NavLinks>
                </NavIten>
              ))}
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/contactUs" className={$scrollNav ? 'scrolled' : ''}>
                Contácto
              </NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
