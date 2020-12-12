import React, { PropsWithChildren } from 'react';
import * as S from './styles';
import { Button } from './Button';

interface Props {
  children: string;
  icon?: React.ReactNode;
  color: 'primary' | 'secondary' | string;
  onClick: () => void;
}

export const FunctionalButton = ({ children, onClick, color }: PropsWithChildren<Props>) => {
  return (
    <S.FunctionalButton>
      <Button onClick={onClick} color={color}>
        {children}
      </Button>
    </S.FunctionalButton>
  );
};
