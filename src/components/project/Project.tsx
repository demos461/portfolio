import React, { FC } from 'react';
import styled from 'styled-components';
import { LinkStyled } from '../Link.styled';

type ProjectPropsType = {
  image?: string;
  stack: string;
  title: string;
  description: string;
  gitLink: string;
  demoLink?: string;
};

export const Project: FC<ProjectPropsType> = ({
  image,
  stack,
  title,
  description,
  gitLink,
  demoLink,
}) => {
  return (
    <StyledProject>
      {image && <Image src={image} />}
      <Stack>{stack}</Stack>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      <LinkStyled>GitHub</LinkStyled>
      {demoLink && <LinkStyled>Demo</LinkStyled>}
    </StyledProject>
  );
};

const StyledProject = styled.article`
  border: 2px solid #bbbbbb;
  min-width: 330px;
`;
const Image = styled.img``;
const Stack = styled.span``;
const ProjectTitle = styled.h3``;
const ProjectDescription = styled.p``;
