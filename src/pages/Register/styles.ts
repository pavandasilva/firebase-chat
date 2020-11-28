import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 397px;
  height: 478px;
  padding: 20px 20px;
  background: ${props => props.theme.colors.lightBackground};
  border-radius: 26px;

  form {
    margin-top: 60px;

    & > div {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;

      span {
        font-weight: 300;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.1em;
        color: ${props => props.theme.colors.lightText};

        &:last-of-type {
          position: absolute;
          top: 20px;
          color: ${props => props.theme.colors.danger};
        }
      }
    }

    button {
      transition: all 0.2s;
      margin-top: 30px;
      background-color: ${props => props.theme.colors.primary};
      height: 43px;
      border: 1px solid ${props => props.theme.colors.primary};
      box-sizing: border-box;
      border-radius: 6px;
      width: 100%;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.075em;
      color: ${props => props.theme.colors.lightText};

      &:hover {
        color: ${props => props.theme.colors.primaryText};
        background-color: ${props => darken(0.02, props.theme.colors.primary)};
      }
    }
  }
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 45px;

  & > div + div {
    margin-top: 24px;
  }
`;
