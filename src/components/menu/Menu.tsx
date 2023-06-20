import React from 'react';
import styled from 'styled-components';

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
  ul {
    display: flex;
    gap: 30px;
  }
`;