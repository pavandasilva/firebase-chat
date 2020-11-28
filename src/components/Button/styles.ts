import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
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
`;
