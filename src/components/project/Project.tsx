import React, { FC } from 'react';
import styled from 'styled-components';
import { LinkStyled } from '../Link.styled';
import { theme } from '../../styles/Theme';

type ProjectPropsType = {
  image: string;
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
      <Stack>
        <span>{stack}</span>
      </Stack>
      <DescriptionBlock>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <LinksBlock>
          <LinkStyled href={gitLink} target={'_blank'}>
            GitHub
          </LinkStyled>
          {demoLink && (
            <LinkStyled href={demoLink} target={'_blank'} secondary>
              Demo
            </LinkStyled>
          )}
        </LinksBlock>
      </DescriptionBlock>
    </StyledProject>
  );
};

const StyledProject = styled.article`
  border: 1px solid ${theme.colors.primary};
  width: 330px;
`;

const DescriptionBlock = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
`;

const LinksBlock = styled.div`
  display: flex;
  gap: 15px;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid ${theme.colors.primary};
`;
const Stack = styled.div`
  border-bottom: 1px solid ${theme.colors.primary};
  padding: 10px;
`;
const ProjectTitle = styled.h3`
  color: ${theme.colors.secondary};
  font-weight: 500;
  font-size: 24px;
`;
const ProjectDescription = styled.p``;
