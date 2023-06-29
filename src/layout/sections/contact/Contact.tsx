import React from 'react';
import styled from 'styled-components';
import { FlexWrapperStyled } from '../../../components/FlexWrapper.styled';
import { SectionTitleStyled } from '../../../components/SectionTitle.styled';
import { LinkStyled } from '../../../components/Link.styled';
import { ContainerStyled } from '../../../components/Container.styled';
import { theme } from '../../../styles/Theme';

export const Contact = () => {
  return (
    <StyledContact>
      <ContainerStyled>
        <SectionTitleStyled>contact</SectionTitleStyled>
        <FlexWrapperStyled justify={'center'} align={'center'}>
          <StyledForm>
            <FlexWrapperStyled gap={'15px'}>
              <Field placeholder={'Name'} />
              <Field
                placeholder={'Email'}
                type={'email'}
                pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
              />
            </FlexWrapperStyled>
            <Field placeholder={'Title'} />
            <Field as={'textarea'} placeholder={'Message'} />
            <Button type={'submit'} as={'button'}>
              Send
            </Button>
          </StyledForm>
        </FlexWrapperStyled>
      </ContainerStyled>
    </StyledContact>
  );
};

const StyledContact = styled.section``;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 570px;
  width: 100%;

  textarea {
    resize: none;
    height: 120px;
  }
`;

const Field = styled.input`
  border: 1px solid ${theme.colors.primary};
  font-family: 'JetBrains Mono', monospace;
  color: ${theme.colors.secondary};
  font-size: 16px;
  background-color: transparent;
  padding: 8px;
  width: 100%;

  &::placeholder {
    color: ${theme.colors.primary};
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.secondary};
  }
`;

const Button = styled(LinkStyled)`
  font-family: 'JetBrains Mono', monospace;
  align-self: flex-start;
`;
