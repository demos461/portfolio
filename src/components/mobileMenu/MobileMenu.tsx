import React, { FC, useState } from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../styles/Theme';

type MobileMenuPropsType = {
  menuItems: string[];
};

export const MobileMenu: FC<MobileMenuPropsType> = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onBurgerButtonClick = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <StyledNav>
      <BurgerButton isOpen={isOpen} onClick={onBurgerButtonClick}>
        <span></span>
      </BurgerButton>
      <MobileMenuPopup isOpen={isOpen}>
        <ul>
          {menuItems.map((item, index) => (
            <li key={`${item}-${index}`}>
              <NavLink href={'#'}>{item}</NavLink>
            </li>
          ))}
        </ul>
      </MobileMenuPopup>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: none;
  @media ${theme.media.tablet} {
    display: block;
  }
`;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background-color: ${theme.colors.background}f0;
  display: none;

  ${props =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  ul {
    display: flex;
    gap: 30px;
    flex-direction: column;
    font-size: 32px;
  }
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -110px;
  right: -110px;
  width: 200px;
  height: 200px;
  z-index: 9999;

  span {
    display: block;
    width: 24px;
    height: 2px;
    background-color: ${theme.colors.secondary};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
      `}

    &:after {
      content: '';
      display: block;
      width: 14px;
      height: 2px;
      background-color: ${theme.colors.secondary};
      position: absolute;
      transform: translateY(10px) translateX(10px);

      ${props =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          width: 24px;
          transform: rotate(90deg);
        `}
    }
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
