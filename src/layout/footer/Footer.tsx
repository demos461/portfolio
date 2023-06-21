import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/icon/Icon';

export const Footer = () => {
  return (
    <StyledFooter>
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
