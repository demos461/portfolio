import React from 'react';
import styled from 'styled-components';
import { FlexWrapperStyled } from '../../../components/FlexWrapper.styled';
import { ContainerStyled } from '../../../components/Container.styled';
import photoImg from '../../../assets/images/photo.png';
import { theme } from '../../../styles/Theme';
import { LinkStyled } from '../../../components/Link.styled';

export const Main = () => {
  return (
    <StyledMain>
      <ContainerStyled>
        <FlexWrapperStyled align={'center'} justify={'space-between'}>
          <div>
            <StyledSpan>Hi There</StyledSpan>
            <SecondTitle>I am Khrapko Ilya</SecondTitle>
            <MainTitle>A front-end developer</MainTitle>
            <Button>Contact me!</Button>
          </div>
          <div>
            <StyledImg src={photoImg} alt='photo' />
            <Status>
              <Square />
              <StatusText>Open to suggestions</StatusText>
            </Status>
          </div>
        </FlexWrapperStyled>
      </ContainerStyled>
    </StyledMain>
  );
};

const StyledImg = styled.img`
  object-fit: cover;
`;

const StyledMain = styled.main`
  padding: 150px;
  display: flex;
`;

const StyledSpan = styled.span`
  color: ${theme.colors.accent};
  font-weight: 500;
`;

const MainTitle = styled.h1`
  font-size: 32px;
  color: ${theme.colors.accent};
  font-weight: 700;
`;

const SecondTitle = styled.h2`
  font-size: 32px;
  font-weight: 500;
  color: ${theme.colors.secondary};
`;

const Status = styled.div`
  display: flex;
  gap: 10px;
  border: 1px solid ${theme.colors.primary};
  padding: 10px;
`;

const StatusText = styled.span`
  font-weight: 600;
`;

const Square = styled.div`
  background-color: ${theme.colors.accent};
  width: 1rem;
  height: 1rem;
`;

const Button = styled(LinkStyled)`
  margin-top: 30px;
`;
