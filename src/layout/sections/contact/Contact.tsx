import React from 'react';
import styled from 'styled-components';
import { FlexWrapperStyled } from '../../../components/FlexWrapper.styled';
import { SectionTitleStyled } from '../../../components/SectionTitle.styled';
import { ButtonStyled } from '../../../components/Button.styled';
import { ContainerStyled } from '../../../components/Container.styled';

export const Contact = () => {
  return (
    <StyledContact>
      <ContainerStyled>
        <SectionTitleStyled>Contact</SectionTitleStyled>
        <FlexWrapperStyled justify={'center'} align={'center'}>
          <StyledForm>
            <Field />
            <Field />
            <Field />
            <Field as={'textarea'} />
            <ButtonStyled type={'submit'}>Send</ButtonStyled>
          </StyledForm>
        </FlexWrapperStyled>
      </ContainerStyled>
    </StyledContact>
  );
};

const StyledContact = styled.section`
  min-height: 100vh;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 570px;
  width: 100%;
`;

const Field = styled.input`
  resize: none;
`;
