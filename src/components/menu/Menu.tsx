import React, { FC } from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';

type MenuPropsType = {
  menuItems: string[];
};

export const Menu: FC<MenuPropsType> = ({ menuItems }) => {
  return (
    <StyledNav>
      <ul>
        {menuItems.map((item, index) => (
          <li key={`${item}-${index}`}>
            <NavLink href={'#'}>{item}</NavLink>
          </li>
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
  @media ${theme.media.tablet} {
    display: none;
  }
`;

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
