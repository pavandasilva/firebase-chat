import styled from 'styled-components';

interface InputContainerProps {
  isActive: boolean;
}

export const Container = styled.div<InputContainerProps>`
  display: flex;
  align-items: center;
  padding: 0px 20px;
  width: 100%;
  height: 43px;
  background: ${props => props.theme.colors.extraLightBackground};
  border: 1px solid
    ${props =>
      props.isActive
        ? props.theme.colors.secondary
        : props.theme.colors.extraLightBackground};
  border-radius: 6px;

  transition: border 0.5s ease;

  svg:first-of-type {
    fill: ${props =>
      props.isActive
        ? props.theme.colors.secondary
        : props.theme.colors.lightText};

    transition: fill 0.5s ease;
    width: 18px;
    height: 18px;
  }

  input {
    display: flex;
    flex: 1;
    margin-left: 20px;
    height: 100%;
    border: none;
    background: transparent;
    transition: color 0.5s ease;

    color: ${props =>
      props.isActive
        ? props.theme.colors.secondary
        : props.theme.colors.lightText};
  }
`;

interface InputIconPasswordProps {
  showPassword?: boolean;
}

export const IconPassword = styled.div<InputIconPasswordProps>`
  cursor: pointer;

  > svg {
    fill: ${props =>
      props.showPassword
        ? props.theme.colors.lightText
        : props.theme.colors.background} !important;
  }
`;
