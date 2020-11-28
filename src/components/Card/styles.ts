import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    font-size: 14px;
  }
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.63);
  border-radius: 6px;
  margin-bottom: 20px;
  padding: 10px 25px 20px;
  max-height: 200px;
`;

export const LastMessage = styled.div`
  h3 {
    margin-top: 7px;
    font-weight: 200;
    font-size: 12px;
  }
  p {
    margin-top: 5px;
  }
`;

export const TitleMessage = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background: ${props => props.theme.colors.lazyLoading};
    overflow: hidden;

    img {
      height: 25px;
      width: 25px;
      border-radius: 50%;
    }
  }

  span {
    margin-left: 7px;
  }
`;

export const Message = styled.div`
  white-space: nowrap;
  word-wrap: break-word;
  width: 100%;
  height: 35px;
  color: #ff8000;
  overflow: hidden;
`;

export const TitleCard = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 7px;
  border-bottom: solid 1px ${props => props.theme.colors.lazyLoading};
`;

export const Bubble = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.danger};
  height: 14px;
  width: 14px;
  border-radius: 50%;
  color: ${props => props.theme.colors.lightText};
  margin-left: 7px;
`;
