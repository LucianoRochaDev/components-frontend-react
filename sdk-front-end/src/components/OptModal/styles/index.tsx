import {
  Button,
  ButtonProps,
  CircularProgress,
  CircularProgressProps,
  Dialog,
  DialogProps,
  Divider,
  DividerProps,
  Grid,
  GridProps,
  Typography,
  TypographyProps,
} from '@material-ui/core';
import styled from 'styled-components';

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

  @media (max-width: 350px) {
    & .MuiPaper-root {
      height: 100vh;
      width: 100vw;
      border-radius: 0;

      display: flex;
      justify-content: space-between;

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

export const ButtonConfirm = styled(Button)<ButtonProps>`
  &.MuiButton-root {
    box-sizing: border-box;
    font-weight: bold;
    color: green;
    padding-top: 24px;
    padding-bottom: 24px;
    font-size: 16px;
  }
`;

export const ButtonCancel = styled(Button)<ButtonProps>`
  &.MuiButton-root {
    box-sizing: border-box;
    font-weight: bold;
    font-size: 16px;
    color: red;
    padding-top: 24px;
    padding-bottom: 24px;
    border-right: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 0px;
  }
`;

export const ContainerButton = styled(Grid)<GridProps>`
  text-align: center;
  margin-top: 16px;
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

export const Title = styled(Typography)<TypographyProps>`
  color: #4f4f4f;
  font-weight: lighter;
  text-align: center;
  padding: 32px 32px;
`;

export const Body = styled.div`
  overflow: auto;

  min-height: 50px;

  @media (min-width: 350px) {
    min-width: 350px;
  }

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #bdbdbd;
  }
`;

export const Loading = styled(CircularProgress)<CircularProgressProps>`
  margin-left: 16px;
  &.MuiCircularProgress-colorPrimary {
    color: green;
  }
`;
