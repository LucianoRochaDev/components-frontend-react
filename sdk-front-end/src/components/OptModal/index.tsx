import React from 'react';
import * as S from './styles';

type Props = {
  title: string;
  subtitle: string;
  textButtonCancel?: string;
  textButtonConfirm?: string;
  open: boolean;
  buttonCancelActive: boolean;
  onClose: () => void;
  actionButtonConfirm: () => void;
};

export const OptModal = ({
  title,
  subtitle,
  textButtonCancel,
  textButtonConfirm,
  open,
  buttonCancelActive,
  onClose,
  actionButtonConfirm,
}: Props) => {
  const textButtonConfirmCustomized = textButtonConfirm ? textButtonConfirm : 'Confirmar';
  const textButtonCancelCustomized = textButtonCancel ? textButtonCancel : 'Cancelar';
  const buttonCancelDisatived = !buttonCancelActive;

  return (
    <S.CustomDialog open={open} onClose={onClose}>
      <div>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </div>

      <S.ContainerButton container>
        <S.DividerHorizontal orientation="horizontal" />
        {buttonCancelActive && (
          <S.ContentButton item xs={6}>
            <S.ButtonCancel disabled={buttonCancelDisatived} fullWidth onClick={onClose} color="secondary">
              {textButtonCancelCustomized}
            </S.ButtonCancel>
          </S.ContentButton>
        )}
        <S.ContentButton item xs={buttonCancelActive ? 6 : 12}>
          <S.ButtonConfirm fullWidth onClick={actionButtonConfirm} color="primary">
            {textButtonConfirmCustomized}
          </S.ButtonConfirm>
        </S.ContentButton>
      </S.ContainerButton>
    </S.CustomDialog>
  );
};
