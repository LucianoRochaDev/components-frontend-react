/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable prefer-const */
/* eslint-disable no-else-return */
import React, { PropsWithChildren } from 'react';
import Color from 'color';
import * as S from './styles';

interface ButtonProps {
  color?: 'primary' | 'secondary' | string;
  onClick?: () => void;
  width?: string;
  icon?: React.ReactNode;
  textColor?: 'inherit' | string;
  path?: string;
}

export const Button = ({
  color = 'primary',
  onClick,
  width,
  children,
  path,
  icon,
  textColor,
}: PropsWithChildren<ButtonProps>) => {
  if (color === 'primary' || color === 'secondary') {
    return (
      <S.BaseButton textColor={textColor} color={color} variant="contained" width={width} onClick={onClick} href={path}>
        {children}
      </S.BaseButton>
    );
  } else {
    let corTexto = Color(textColor);
    const textoCor = corTexto.hex();
    let corprops = Color(color);
    const hovercolor = corprops.saturate(0.5).hex();
    const clickcolor = corprops.lighten(0.5).hex();

    return (
      <S.BaseButton
        icon={icon}
        onClick={onClick}
        textColor={textoCor}
        bgColor={color}
        hoverBgColor={hovercolor}
        clickBgColor={clickcolor}
        variant="contained"
        width={width}
        href={path}>
        {children}
      </S.BaseButton>
    );
  }
};
