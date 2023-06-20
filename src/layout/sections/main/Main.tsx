import React from 'react';
import photoImg from '../../../assets/images/photo.webp';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align={'center'} justify={'space-around'}>
        <div>
          <span>Hi There</span>
          <h2>I am Khrapko Ilya</h2>
          <MainTitle>A front-end developer</MainTitle>
          <button>Contact me!</button>
        </div>

        <StyledImg src={photoImg} alt='photo' />
      </FlexWrapper>
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
