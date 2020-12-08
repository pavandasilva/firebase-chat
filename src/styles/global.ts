import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0
  }

  body {
    background: ${props => props.theme.colors.bodyBackground};
    color: ${props => props.theme.colors.primaryText};
    -webkit-font-smoothing: antialiased;
    font-size: 12px;
  }

  button {
    cursor: pointer;
    border: none;
  }
`;
