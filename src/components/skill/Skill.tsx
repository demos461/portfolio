import React, { FC } from 'react';
import { Icon } from '../icon/Icon';
import styled from 'styled-components';

type SkillPropsType = {
  iconId: string;
  title: string;
};

export const Skill: FC<SkillPropsType> = ({ iconId, title }) => {
  return (
    <StyledSkill>
      <Icon iconId={iconId} width={'115'} height={'115'} viewBox={'0 0 115 115'} />
      <StyledTitle>{title}</StyledTitle>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const StyledTitle = styled.h3``;
