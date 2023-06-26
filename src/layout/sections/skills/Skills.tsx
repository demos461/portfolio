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
        <SectionTitleStyled>skills</SectionTitleStyled>
        <FlexWrapperStyled justify={'center'} wrap={'wrap'} gap={'50px'}>
          <Skill iconId={'html'} title={'HTML'} />
          <Skill iconId={'css'} title={'CSS'} />
          <Skill iconId={'sass'} title={'Sass'} />
          <Skill iconId={'styled'} title={'Styled components'} />
          <Skill iconId={'tailwind'} title={'Tailwindcss'} />
          <Skill iconId={'js'} title={'JavaScript'} />
          <Skill iconId={'ts'} title={'TypeScript'} />
          <Skill iconId={'react'} title={'React'} />
          <Skill iconId={'redux'} title={'Redux/Redux Toolkit'} />
          <Skill iconId={'git'} title={'Git'} />
        </FlexWrapperStyled>
      </ContainerStyled>
    </StyledSkills>
  );
};

const StyledSkills = styled.section``;
