import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1200px;
  height: 600px;
  border-radius: 10px;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.08);
  overflow: hidden;
`;

export const Aside = styled.div`
  padding: 20px 30px;
  width: 230px;
  border-right: 1px gray solid;
`;

export const Content = styled.div``;
