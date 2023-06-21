import React from 'react';
import styled from 'styled-components';
import { SectionTitleStyled } from '../../../components/SectionTitle.styled';
import { FlexWrapperStyled } from '../../../components/FlexWrapper.styled';
import { Project } from '../../../components/project/Project';

export const Projects = () => {
  return (
    <StyledProjects>
      <SectionTitleStyled>projects &lt;~&gt;</SectionTitleStyled>
      <FlexWrapperStyled justify={'space-around'} wrap={'wrap'}>
        <Project
          title={'Todolist'}
          stack={'Typescript React Redux'}
          description={'Todolist app'}
          gitLink={'https://github.com/'}
        />
        <Project
          title={'Todolist'}
          stack={'Typescript React Redux'}
          description={'Todolist app'}
          gitLink={'https://github.com/'}
        />
        <Project
          title={'Todolist'}
          stack={'Typescript React Redux'}
          description={'Todolist app'}
          gitLink={'https://github.com/'}
        />
        <Project
          title={'Todolist'}
          stack={'Typescript React Redux'}
          description={'Todolist app'}
          gitLink={'https://github.com/'}
        />
      </FlexWrapperStyled>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  min-height: 100vh;
  background-color: lightyellow;
`;
