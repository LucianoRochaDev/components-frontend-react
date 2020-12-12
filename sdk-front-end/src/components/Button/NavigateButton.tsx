import React from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './styles';
import { Button } from './Button';

interface Props {
  path: string;
  children: string;
}

export const NavigateButton = ({ children, path }: Props) => {
  const history = useHistory();

  function handleClick() {
    history.push(path);
  }

  return (
    <S.NavigateButton>
      <Button onClick={handleClick} path={path}>
        {children}
      </Button>
    </S.NavigateButton>
  );
};
