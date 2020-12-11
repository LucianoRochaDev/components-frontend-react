import {
  Button,
  Dialog,
  Divider,
  ButtonProps,
  DialogProps,
  DividerProps,
  Grid,
  GridProps,
  Typography,
  TypographyProps,
} from '@material-ui/core';
import styled from 'styled-components';

interface ButtonGenericProps extends ButtonProps {
  textcolor?: string;
}

export const CustomDialog = styled(Dialog)<DialogProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  & .MuiPaper-rounded {
    border-radius: 20px;
  }

  & .MuiPaper-elevation1 {
    box-shadow: none;
  }

  @media (max-width: 500px) {
    & .MuiPaper-root {
      height: 100vh;
      width: 100vw;
      border-radius: 0;

      display: flex;
      justify-content: space-between;
      /* align-items: center; */

      &.MuiDialog-paperWidthSm {
        max-width: 100vw;
      }

      &.MuiDialog-paperScrollPaper {
        max-height: 100vh;
      }

      &.MuiDialog-paper {
        margin: 0;
      }
    }
  }
`;

export const ButtonConfirm = styled(Button)<ButtonGenericProps>`
  &.MuiButton-root {
    box-sizing: border-box;
    font-weight: bold;
    color: ${({ textcolor }) => `${textcolor}`};
    padding-top: 24px;
    padding-bottom: 24px;
    font-size: 16px;
  }
`;

export const ButtonCancel = styled(Button)<ButtonGenericProps>`
  &.MuiButton-root {
    box-sizing: border-box;
    font-weight: bold;
    font-size: 16px;
    color: ${({ textcolor }) => `${textcolor}`};
    padding-top: 24px;
    padding-bottom: 24px;
    border-right: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 0px;
  }
`;

export const ContainerButton = styled(Grid)<GridProps>`
  text-align: center;
`;

export const ContentButton = styled(Grid)<GridProps>`
  border-top-style: 'outset';
  border-top-color: '#F8F8FF';
  direction: row;
`;

export const DividerHorizontal = styled(Divider)<DividerProps>`
  width: 100%;
  height: 1.5px;
`;

export const Title = styled(Typography)<TypographyProps>``;

export const Subtitle = styled(Typography)<TypographyProps>``;
