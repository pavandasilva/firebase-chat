import styled, { css } from 'styled-components';

interface ContainerProps {
  currentTab: 'signin' | 'register';
}

export const Container = styled.div<ContainerProps>`
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
      }

      transition: color 0.5s;
    }

    ${props =>
      props.currentTab === 'signin'
        ? css`
            &:first-of-type {
              span {
                color: ${props.theme.colors.primaryText};
              }
            }
          `
        : css`
            &:last-of-type {
              span {
                color: ${props.theme.colors.primaryText};
              }
            }
          `}
  }
`;
