import React, { FC } from 'react';
import iconsSprite from '../../assets/images/icons-sprite.svg';

type IconPropsType = {
  iconId: string;
  height?: string;
  width?: string;
  viewBox?: string;
};

export const Icon: FC<IconPropsType> = ({ iconId, height, width, viewBox }) => {
  return (
    <svg
      width={width || '32'}
      height={height || '32'}
      viewBox={viewBox || '0 0 32 32'}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <use xlinkHref={`${iconsSprite}#${iconId}`} />
    </svg>
  );
};
