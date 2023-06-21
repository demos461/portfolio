import React from 'react';
import styled from 'styled-components';
import { FlexWrapperStyled } from '../../../components/FlexWrapper.styled';
import { SectionTitleStyled } from '../../../components/SectionTitle.styled';
import { Skill } from '../../../components/skill/Skill';
import { ContainerStyled } from '../../../components/Container.styled';

export const Skills = () => {
  return (
    <StyledSkills>
      <ContainerStyled>
        <SectionTitleStyled>Skills</SectionTitleStyled>
        <FlexWrapperStyled justify={'space-around'} wrap={'wrap'}>
          <Skill iconId={'html'} title={'HTML'} />
          <Skill iconId={'css'} title={'CSS'} />
          <Skill iconId={'js'} title={'JavaScript'} />
          <Skill iconId={'react'} title={'React'} />
          <Skill iconId={'redux'} title={'Redux'} />
        </FlexWrapperStyled>
      </ContainerStyled>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  background-color: lightskyblue;
  min-height: 100vh;
`;
