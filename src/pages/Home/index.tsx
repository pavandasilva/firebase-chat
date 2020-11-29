/* eslint-disable no-console */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { FaAdjust, FaTools, FaAlignJustify } from 'react-icons/fa';
import { Button } from '../../components/Button';
import { Bubble, Card, SendMessageInput } from '../../components';
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
  Messages,
} from './styles';

export const Home = () => {
  const handleSendingMessages = () => {
    console.log('funcionou handleSendingMessages');
  };

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
              <li>
                #Amigos <Bubble value={10} />
              </li>
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
          <Messages>
            <Card type="right" />
            <Card type="left" />
          </Messages>
          <footer>
            <SendMessageInput handleSendingMessages={handleSendingMessages} />
          </footer>
        </Main>
      </Container>
    </Wrapper>
  );
};
