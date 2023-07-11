import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/icon/Icon';
import { ContainerStyled } from '../../components/Container.styled';
import { FlexWrapperStyled } from '../../components/FlexWrapper.styled';

export const Footer = () => {
  return (
    <StyledFooter>
      <ContainerStyled>
        <FlexWrapperStyled direction={'column'} align={'center'} gap={'15px'}>
          <SocialList>
            <SocialItem>
              <SocialLink href={'https://github.com/demos461'} target={'_blank'}>
                <Icon iconId={'github'} />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink
                href={'https://www.linkedin.com/in/ilya-khrapko-5b2957215/'}
                target={'_blank'}
              >
                <Icon iconId={'linkedin'} />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink href={'https://t.me/demos461'} target={'_blank'}>
                <Icon iconId={'telegram'} />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink href={'mailto:ilya.khrapko.dev@gmail.com'} target={'_blank'}>
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px 0;
`;

const SocialList = styled.ul`
  display: flex;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a``;

const Copyright = styled.span``;
