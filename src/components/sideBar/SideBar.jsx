import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarWrapper, SidebarLink, SideBtnWrap, SidebarRoute, Links } from './SideBarElements';
import { navItems,} from '../../data';

const Sidebar = ({ $isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={$isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarLink key={item.id} onClick={toggle}>
              <Links to={item.path}>{item.title}</Links>
            </SidebarLink>
          ))}
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/contactus'> Contact us</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;