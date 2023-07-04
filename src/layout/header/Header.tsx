import React from 'react';
import styled from 'styled-components';
import { ContainerStyled } from '../../components/Container.styled';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { FlexWrapperStyled } from '../../components/FlexWrapper.styled';
import { MobileMenu } from '../../components/mobileMenu/MobileMenu';

const menuItems = ['home', 'skills', 'projects', 'contacts'];

export const Header = () => {
  return (
    <StyledHeader>
      <ContainerStyled>
        <FlexWrapperStyled justify={'space-between'} align={'center'}>
          <Logo />
          <Menu menuItems={menuItems} />
          <MobileMenu menuItems={menuItems} />
        </FlexWrapperStyled>
      </ContainerStyled>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 30px 0;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 9999;
`;
