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
        <FlexWrapperStyled
          justify={'space-around'}
          align={'flex-start'}
          wrap={'wrap'}
          gap={'15px'}
        >
          <Project
            image={todoImg}
            title={'Inctagram'}
            stack={'Typescript Next React-query Zustand Axios Tailwindcss'}
            description={'Social network for posting photos'}
            gitLink={'https://github.com/Armazok/Inctagram'}
            demoLink={'https://inctagram-main.vercel.app/auth/login'}
          />
          <Project
            image={todoImg}
            title={'Todolist'}
            stack={
              'Typescript React Redux-Toolkit Formik React-router-dom Axios Material UI'
            }
            description={
              'To-Do List is a mobile responsive web app with the ability to login and create different To-Do lists with tasks and their descriptions, edit content, and track tasks status'
            }
            gitLink={'https://github.com/demos461/react-todolist'}
            demoLink={'https://demos461.github.io/react-todolist/'}
          />
          <Project
            image={todoImg}
            title={'Pizza'}
            stack={
              'Typescript React Redux-Toolkit Redux-persist React-router-dom Axios Sass'
            }
            description={
              'Pizza is an online shop with the ability to search, filter and sort different pizzas, add to cart and save to local storage'
            }
            gitLink={'https://github.com/demos461/react-pizza-v2'}
            demoLink={'https://demos461.github.io/react-pizza-v2/'}
          />
          <Project
            image={todoImg}
            title={'Card learning'}
            stack={
              'Typescript React Redux-Toolkit React-hook-form React-router-dom Axios Sass'
            }
            description={
              'Learning cards app. Create packs of cards to learn in question/answer format and monitor your study progress'
            }
            gitLink={'https://github.com/alkuzbl/friday_ignat'}
          />
          <Project
            image={todoImg}
            title={'Social network'}
            stack={'Typescript React Redux-Toolkit Formik React-router-dom Axios Sass'}
            description={
              'Social Network for front-end developers: Login and update profile info, follow real user'
            }
            gitLink={'https://github.com/demos461/react-social-network'}
            demoLink={'https://demos461.github.io/react-social-network/'}
          />
          <Project
            image={todoImg}
            title={'Github search'}
            stack={
              'Typescript React Redux-Toolkit RTK Query React-router-dom Tailwindcss'
            }
            description={'App for search github repos and add favorites to local storage'}
            gitLink={'https://github.com/demos461/react-github-search'}
            demoLink={'https://demos461.github.io/react-github-search/'}
          />
          <Project
            image={todoImg}
            title={'Portfolio'}
            stack={'Typescript React Styled-component'}
            description={'You’re using it rn'}
            gitLink={'https://github.com/demos461/portfolio'}
          />
          <Project
            image={todoImg}
            title={'Singolo'}
            stack={'HTML CSS JavaScript'}
            description={'Landing page'}
            gitLink={'https://github.com/demos461/singolo'}
            demoLink={'https://demos461.github.io/singolo/'}
          />
        </FlexWrapperStyled>
      </ContainerStyled>
    </StyledProjects>
  );
};

const StyledProjects = styled.section``;
