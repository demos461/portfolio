import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/icon/Icon';
import { ContainerStyled } from '../../components/Container.styled';
import { FlexWrapperStyled } from '../../components/FlexWrapper.styled';

export const Footer = () => {
  return (
    <StyledFooter>
      <ContainerStyled>
        <FlexWrapperStyled direction={'column'} align={'center'}>
          <SocialList>
            <SocialItem>
              <SocialLink>
                <Icon iconId={'github'} />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink>
                <Icon iconId={'linkedin'} />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink>
                <Icon iconId={'email'} />
              </SocialLink>
            </SocialItem>
          </SocialList>
          <Copyright>© Copyright 2023. Made by Ilya Khrapko</Copyright>
        </FlexWrapperStyled>
      </ContainerStyled>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: aquamarine;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SocialList = styled.ul``;

const SocialItem = styled.li``;

const SocialLink = styled.a``;

const Copyright = styled.span``;
