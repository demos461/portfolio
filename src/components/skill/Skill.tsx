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
      <Icon iconId={iconId} width={'115px'} height={'115px'} viewBox={'0 0 115 115'} />
      <StyledTitle>{title}</StyledTitle>
    </StyledSkill>
  );
};

const StyledSkill = styled.div``;

const StyledTitle = styled.h3``;
