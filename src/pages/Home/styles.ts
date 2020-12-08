import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.colors.bodyBackground};
  overflow: hidden;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  background-color: ${props => props.theme.colors.lightBackground};
  width: 1083px;
  height: 723px;
  border-radius: 26px;
  overflow: hidden;
`;

export const Aside = styled.aside`
  position: fixed;
  width: 278px;
  height: 723px;
  background: ${props => props.theme.colors.background};
  border-radius: 26px 0px 0px 26px;

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 100%;
    height: 50px;

    span {
      font-weight: 900;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.45em;
      color: ${props => props.theme.colors.primaryText};
    }
  }
`;

interface ProfileProps {
  loading: boolean;
}

export const Profile = styled.section<ProfileProps>`
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 277px;
  padding: 30px 30px 40px;
  border-bottom: 1px solid ${props => props.theme.colors.divider};

  strong {
    margin-top: 7px;
    font-size: 12px;
    letter-spacing: 0.085em;
    display: inline-block;
    color: ${props => props.theme.colors.primaryText};
    padding: 1px;

    background-color: ${props => {
      let transparence = 1;

      if (props.loading) {
        transparence = 0;
      }

      return transparentize(transparence, props.theme.colors.lazyLoading);
    }};

    transition: all 0.3s;

    min-width: 170px;
    width: auto;
    height: 18px;
    text-align: center;
  }

  p {
    margin-top: 4px;
    font-size: 12px;
    letter-spacing: 0.085em;
    color: ${props => props.theme.colors.lightText};
    display: inline-block;
    padding: 1px;

    min-width: 200px;
    width: auto;
    height: 18px;
    text-align: center;

    transition: all 0.3s;

    background-color: ${props => {
      let transparence = 1;

      if (props.loading) {
        transparence = 0;
      }

      return transparentize(transparence, props.theme.colors.lazyLoading);
    }};
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.lazyLoading};
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
      border: solid 1px ${props => props.theme.colors.secondary};
    }

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
`;

export const Roms = styled.section`
  user-select: none;
  padding: 30px 30px 40px;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;

  strong {
    font-size: 14px;
    letter-spacing: 0.075em;
    color: ${props => props.theme.colors.secondary};
  }

  ul {
    margin-top: 5px;
    list-style: none;
  }
`;

export const Main = styled.div`
  margin-left: 278px;
  flex-direction: column;
  display: flex;
  flex: 1;
  position: relative;
  overflow: hidden;

  header {
    padding: 0px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 100%;
    height: 50px;
    overflow: hidden;
    z-index: 10;

    strong {
      font-weight: 400;
      font-size: 16px;
      color: ${props => props.theme.colors.secondary};
      letter-spacing: 0.15em;
    }
  }

  footer {
    display: flex;
    position: absolute;
    bottom: 20px;
    width: 100%;
    padding: 0px 30px;
    z-index: 10;
    overflow: hidden;
  }
`;

export const Nav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100px;
  height: 100%;

  svg {
    cursor: pointer;
    fill: ${props => props.theme.colors.lightText};
    width: 22px;
    height: auto;
    margin-left: 25px;

    &:hover {
      fill: ${props => props.theme.colors.primaryText};
    }
  }
`;

export const Hamburger = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 70px;
  height: 100%;
  cursor: pointer;

  &:hover {
    svg {
      fill: ${props => props.theme.colors.primaryText};
    }
  }

  svg {
    fill: ${props => props.theme.colors.lightText};
    width: 22px;
    height: auto;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex: 1;
  font-size: 14px;
  letter-spacing: 0.075em;
  color: ${props => props.theme.colors.secondary};
`;

export const Messages = styled.div`
  padding: 35px;
  height: calc(100% - 100px);
  overflow-y: scroll;
  margin-top: 7px 0px;

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.background};
    border-radius: 4px;
    margin-top: 3px;
    margin-bottom: 15px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.extraLightBackground};
    border-radius: 4px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.lazyLoading};
  }
`;

interface LiProps {
  selected: boolean;
}

export const Li = styled.li<LiProps>`
  display: inline-block;
  text-align: left;
  margin-top: 15px;
  text-decoration: none;
  font-size: 14px;
  letter-spacing: 0.1em;
  color: ${props => props.theme.colors.lightText};
  cursor: pointer;
  transition: all 0.3s;
  min-height: 20px;
  min-width: 100px;
  width: auto;
  padding: 1px;

  &:hover {
    color: ${props => props.theme.colors.primaryText};
    margin-left: 3px;
  }

  & > div {
    margin-left: 10px;
  }

  ${props =>
    props.selected &&
    css`
      color: ${props.theme.colors.primaryText};
      margin-left: 3px;
    `}
`;

export const Loading = styled.div`
  position: absolute;
  background-color: ${transparentize(0.4, 'black')};
  padding: 1px;
  left: -58px;
  top: -58px;
  width: calc(100% + 58px);
  height: calc(100vh + 58px);
  z-index: 999;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
`;
