import styled from 'styled-components';

interface CardProps {
  type: 'right' | 'left';
}

export const Container = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  margin-left: ${props => (props.type === 'right' ? '82px' : '0px')};
  box-shadow: ${props =>
    props.type === 'right' ? '0px 0px 9px 0px rgba(0, 0, 0, 0.63)' : 'none'};

  background-color: ${props =>
    props.type === 'right' ? props.theme.colors.background : 'transparent'};
  border-radius: 6px;
  padding: 25px 25px 40px;
`;

export const Header = styled.div<CardProps>`
  display: flex;
  flex-direction: row;
  box-shadow: none;
  justify-content: ${props =>
    props.type === 'right' ? 'flex-end' : 'flex-start'};

  width: 100%;
  padding: 0px;
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.lazyLoading};

  img {
    width: 40px;
    height: 40px;
  }
`;

export const Info = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${props => (props.type === 'right' ? 'flex-end' : 'flex-start')};
  margin-right: 16px;
  margin-left: ${props => (props.type === 'left' ? '16px' : '0px')};

  strong {
    font-size: 12px;
    color: ${props => props.theme.colors.primaryText};
  }
  span {
    color: ${props => props.theme.colors.lightText};
    font-size: 12px;
  }
`;

export const Text = styled.div`
  margin-top: 20px;
  text-align: justify;
  text-justify: inter-word;
`;
