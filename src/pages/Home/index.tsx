/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { FaAdjust, FaTools, FaAlignJustify } from 'react-icons/fa';
import { Button } from '../../components/Button';
import {
  Wrapper,
  Container,
  Aside,
  Main,
  Profile,
  Roms,
  Nav,
  Hamburger,
  Title,
} from './styles';

export const Home = () => {
  return (
    <Wrapper>
      <Container>
        <Aside>
          <header>
            <span>MY CHAT</span>
          </header>
          <Profile>
            <div>
              <img />
            </div>
            <strong>Maria Joana</strong>
            <p>maria@gmail.com</p>
            <Button>Sign Out</Button>
          </Profile>
          <Roms>
            <strong>ROMS</strong>
            <ul>
              <li>#Amigos</li>
              <li>#Sexo Casual</li>
            </ul>
          </Roms>
        </Aside>
        <Main>
          <header>
            <Hamburger>
              <FaAlignJustify />
            </Hamburger>
            <Title>#Amigos</Title>
            <Nav>
              <FaTools />
              <FaAdjust />
            </Nav>
          </header>
        </Main>
      </Container>
    </Wrapper>
  );
};
