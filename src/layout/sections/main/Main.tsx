import React from 'react';
import styled from 'styled-components';
import { FlexWrapperStyled } from '../../../components/FlexWrapper.styled';

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapperStyled align={'center'} justify={'space-around'}>
        <div>
          <span>Hi There</span>
          <h2>I am Khrapko Ilya</h2>
          <MainTitle>A front-end developer</MainTitle>
          <button>Contact me!</button>
        </div>

        <StyledImg src='' alt='photo' />
      </FlexWrapperStyled>
    </StyledMain>
  );
};

const StyledImg = styled.img`
  object-fit: cover;
`;

const StyledMain = styled.main`
  min-height: 100vh;
  background-color: lightpink;
`;

const MainTitle = styled.h1``;
