import styled, { css } from 'styled-components';
import { theme } from '../styles/Theme';

type LinkPropsType = {
  secondary?: boolean;
};

export const LinkStyled = styled.a<LinkPropsType>`
  font-family: 'Montserrat', sans-serif;
  padding: 8px 16px;
  color: ${theme.colors.secondary};
  font-weight: 500;
  border: 1px solid ${theme.colors.accent};
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.accent}20;
  }

  ${props =>
    props.secondary &&
    css`
      border: 1px solid ${theme.colors.primary};
      color: ${theme.colors.primary};

      &:hover {
        background-color: ${theme.colors.primary}20;
      }
    `}
`;
