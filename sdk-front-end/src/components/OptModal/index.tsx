import { ButtonProps, CircularProgressProps, TypographyProps } from '@material-ui/core';
import React from 'react';
import * as S from './styles';

type Props = {
  title: string;
  titleProps?: TypographyProps;
  body: JSX.Element;
  textButtonCancel?: string;
  buttonCancelActive: boolean;
  buttonCancelProps?: ButtonProps;
  actionButtonCancel: () => void;
  textButtonConfirm?: string;
  buttonConfirmProps?: ButtonProps;
  actionButtonConfirm: () => void;
  loading: boolean;
  loadingProps?: CircularProgressProps;
  open: boolean;
};

export const OptModal = ({
  title,
  body,
  textButtonCancel,
  titleProps,
  textButtonConfirm,
  buttonCancelProps,
  buttonConfirmProps,
  open,
  loading,
  loadingProps,
  buttonCancelActive,
  actionButtonCancel,
  actionButtonConfirm,
}: Props) => {
  const textButtonConfirmCustomized = textButtonConfirm ? textButtonConfirm : 'Confirmar';
  const textButtonCancelCustomized = textButtonCancel ? textButtonCancel : 'Cancelar';
  const titleVariant = titleProps?.variant !== undefined ? titleProps?.variant : 'h4';
  const loadingSize = loadingProps?.size !== undefined ? loadingProps?.size : 24;

  return (
    <S.CustomDialog open={open}>
      <S.Title {...titleProps} variant={titleVariant}>
        {title}
      </S.Title>
      <S.Body>{body}</S.Body>
      <S.ContainerButton container>
        <S.DividerHorizontal orientation="horizontal" />
        {buttonCancelActive && (
          <S.ContentButton item xs={6}>
            <S.ButtonCancel disabled={loading} fullWidth onClick={actionButtonCancel} {...buttonCancelProps}>
              {textButtonCancelCustomized}
            </S.ButtonCancel>
          </S.ContentButton>
        )}
        <S.ContentButton item xs={buttonCancelActive ? 6 : 12}>
          <S.ButtonConfirm disabled={loading} fullWidth onClick={actionButtonConfirm} {...buttonConfirmProps}>
            {textButtonConfirmCustomized}
            {loading && <S.Loading {...loadingProps} size={loadingSize} />}
          </S.ButtonConfirm>
        </S.ContentButton>
      </S.ContainerButton>
    </S.CustomDialog>
  );
};
