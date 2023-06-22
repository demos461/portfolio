import React from 'react';
import styled from 'styled-components';
import { FlexWrapperStyled } from '../../../components/FlexWrapper.styled';
import { ContainerStyled } from '../../../components/Container.styled';

export const Main = () => {
  return (
    <StyledMain>
      <ContainerStyled>
        <FlexWrapperStyled align={'center'} justify={'space-between'}>
          <div>
            <span>Hi There</span>
            <h2>I am Khrapko Ilya</h2>
            <MainTitle>A front-end developer</MainTitle>
            <button>Contact me!</button>
          </div>

          <StyledImg src='' alt='photo' />
        </FlexWrapperStyled>
      </ContainerStyled>
    </StyledMain>
  );
};

const StyledImg = styled.img`
  object-fit: cover;
`;

const StyledMain = styled.main`
  min-height: 100vh;
`;

const MainTitle = styled.h1``;
