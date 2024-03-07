import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 250px;
  height: 100%;
  background-color: #2C2A4A;
  position: fixed;
  z-index: 2;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  transition: left 0.3s ease;
`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
`;

const SidebarItem = styled.li`
  padding: 1rem;
`;

const SidebarLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 1.2rem;
`;

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarMenu>
        <SidebarItem>
          <SidebarLink to="/" onClick={toggle}>Home</SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="/services" onClick={toggle}>Services</SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="/aboutUs" onClick={toggle}>About Us</SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="/contactUs" onClick={toggle}>Contact Us</SidebarLink>
        </SidebarItem>
        {/* Add more sidebar items as needed */}
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
