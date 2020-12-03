import styled from 'styled-components';

interface SendMessageInputProps {
  isFocus: boolean;
}

export const Container = styled.div<SendMessageInputProps>`
  display: flex;
  align-items: center;
  padding: 0px 20px;
  width: 100%;
  height: 43px;
  background: ${props => props.theme.colors.extraLightBackground};
  border: 1px solid
    ${props =>
      props.isFocus
        ? props.theme.colors.secondary
        : props.theme.colors.extraLightBackground};
  border-radius: 6px;
  transition: border 0.5s;

  svg {
    cursor: pointer;
    fill: ${props =>
      props.isFocus
        ? props.theme.colors.secondary
        : props.theme.colors.lightText};

    transition: fill 0.5s;
    width: 18px;
    height: 18px;
  }

  input {
    display: flex;
    flex: 1;
    margin-left: 5px;
    height: 100%;
    border: none;
    background: transparent;
    transition: color 0.5s;

    color: ${props =>
      props.isFocus
        ? props.theme.colors.secondary
        : props.theme.colors.lightText};
  }
`;
