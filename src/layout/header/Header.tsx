import React from 'react';
import styled from 'styled-components';
import { ContainerStyled } from '../../components/Container.styled';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { FlexWrapperStyled } from '../../components/FlexWrapper.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <ContainerStyled>
        <FlexWrapperStyled justify={'space-between'} align={'center'}>
          <Logo />
          <Menu />
        </FlexWrapperStyled>
      </ContainerStyled>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: greenyellow;
`;
