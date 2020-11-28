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
      }

      strong {
        position: absolute;
        top: 20px;
        color: ${props => props.theme.colors.danger};
      }
    }
  }
`;

export const Inputs = styled.div`
  margin-top: 45px;
`;
