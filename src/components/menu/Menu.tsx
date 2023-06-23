import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';

const menuItems = ['home', 'skills', 'projects', 'contacts'];

export const Menu = () => {
  return (
    <StyledNav>
      <ul>
        {menuItems.map((item, index) => (
          <ListItem key={`${item}-${index}`}>
            <NavLink href={'#'}>{item}</NavLink>
          </ListItem>
        ))}
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }
`;

const ListItem = styled.li``;

const NavLink = styled.a`
  color: ${theme.colors.primary};
  font-weight: 500;

  &:hover {
    color: ${theme.colors.secondary};
  }

  &:before {
    content: '#';
    color: ${theme.colors.accent};
  }
`;
