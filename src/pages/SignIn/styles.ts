import styled from 'styled-components';

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
      display: flex;
      justify-content: center;
      width: 100%;

      span {
        font-weight: 300;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.1em;
        color: ${props => props.theme.colors.lightText};
      }
    }
  }
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;

  & > div + div {
    margin-top: 24px;
  }
`;

export const Navigator = styled.div`
  display: flex;
  width: 100%;
  line-height: 16px;

  a {
    display: flex;
    flex: 1;
    text-decoration: none;
    justify-content: center;

    span {
      letter-spacing: 0.075em;
      font-size: 14px;
      color: ${props => props.theme.colors.lightText};

      &:hover {
        color: ${props => props.theme.colors.primaryText};
        font-weight: bold;
      }
    }
  }
`;
