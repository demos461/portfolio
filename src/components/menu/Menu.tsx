import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';

export const Menu = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <a href=''>home</a>
        </li>
        <li>
          <a href=''>skills</a>
        </li>
        <li>
          <a href=''>projects</a>
        </li>
        <li>
          <a href=''>contacts</a>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  padding: 30px 0;
  ul {
    display: flex;
    gap: 30px;

    li > a {
      color: ${theme.colors.primary};

      &:hover {
        color: ${theme.colors.secondary};
      }

      &:before {
        content: '#';
        color: ${theme.colors.accent};
      }
    }
  }
`;
