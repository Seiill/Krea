import React from 'react';
import { SidebarContainer, SidebarMenu, SidebarItem, SidebarLink,  } from './sideBarElements';


const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarMenu>
        <SidebarItem>
          <SidebarLink to="/" onClick={toggle}>Inicio</SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="/services" onClick={toggle}>Servicios</SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="/aboutUs" onClick={toggle}>Nosotros</SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="/contactUs" onClick={toggle}>Contácto</SidebarLink>
        </SidebarItem>
        
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
