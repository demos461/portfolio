import styled from 'styled-components';
import { theme } from '../styles/Theme';

export const SectionTitleStyled = styled.h2`
  font-size: 32px;
  font-weight: 500;
  color: ${theme.colors.secondary};
  overflow: hidden;
  margin: 50px 0;

  &:before {
    content: '#';
    color: ${theme.colors.accent};
  }

  &:after {
    content: '';
    display: inline-block;
    height: 0.5em;
    vertical-align: bottom;
    width: 50%;
    margin-right: -100%;
    margin-left: 10px;
    border-top: 1px solid ${theme.colors.accent};
  }
`;
