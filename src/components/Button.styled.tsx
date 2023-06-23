import styled from 'styled-components';
import { theme } from '../styles/Theme';

export const ButtonStyled = styled.button`
  font-family: 'Montserrat', sans-serif;
  padding: 8px 16px;
  color: ${theme.colors.secondary};
  font-weight: 500;
  border: 1px solid ${theme.colors.accent};
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.accent}20;
  }
`;
