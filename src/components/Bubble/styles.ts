import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 8px;
  color: ${props => props.theme.colors.primaryText};
  background: ${props => props.theme.colors.danger};
  width: 20px;
  height: 14px;
  border-radius: 5px;
`;
