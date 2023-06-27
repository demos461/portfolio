import React from 'react';
import styled from 'styled-components';
import { SectionTitleStyled } from '../../../components/SectionTitle.styled';
import { FlexWrapperStyled } from '../../../components/FlexWrapper.styled';
import { Project } from '../../../components/project/Project';
import { ContainerStyled } from '../../../components/Container.styled';
import todoImg from '../../../assets/images/todo.webp';

export const Projects = () => {
  return (
    <StyledProjects>
      <ContainerStyled>
        <SectionTitleStyled>projects</SectionTitleStyled>
        <FlexWrapperStyled justify={'space-around'} wrap={'wrap'} gap={'15px'}>
          <Project
            image={todoImg}
            title={'Todolist'}
            stack={'Typescript React Redux-Toolkit Formik React-router-dom Material UI '}
            description={'Todolist app'}
            gitLink={'https://github.com/demos461/react-todolist'}
            demoLink={'https://demos461.github.io/react-todolist/'}
          />
          <Project
            image={todoImg}
            title={'Todolist'}
            stack={'Typescript React Redux-Toolkit Formik React-router-dom Material UI '}
            description={'Todolist app'}
            gitLink={'https://github.com/demos461/react-todolist'}
            demoLink={'https://demos461.github.io/react-todolist/'}
          />
          <Project
            image={todoImg}
            title={'Todolist'}
            stack={'Typescript React Redux-Toolkit Formik React-router-dom Material UI '}
            description={'Todolist app'}
            gitLink={'https://github.com/demos461/react-todolist'}
            demoLink={'https://demos461.github.io/react-todolist/'}
          />
          <Project
            image={todoImg}
            title={'Todolist'}
            stack={'Typescript React Redux-Toolkit Formik React-router-dom Material UI '}
            description={'Todolist app'}
            gitLink={'https://github.com/demos461/react-todolist'}
            demoLink={'https://demos461.github.io/react-todolist/'}
          />
          <Project
            image={todoImg}
            title={'Todolist'}
            stack={'Typescript React Redux-Toolkit Formik React-router-dom Material UI '}
            description={'Todolist app'}
            gitLink={'https://github.com/demos461/react-todolist'}
            demoLink={'https://demos461.github.io/react-todolist/'}
          />
          <Project
            image={todoImg}
            title={'Todolist'}
            stack={'Typescript React Redux-Toolkit Formik React-router-dom Material UI '}
            description={'Todolist app'}
            gitLink={'https://github.com/demos461/react-todolist'}
            demoLink={'https://demos461.github.io/react-todolist/'}
          />
        </FlexWrapperStyled>
      </ContainerStyled>
    </StyledProjects>
  );
};

const StyledProjects = styled.section``;
