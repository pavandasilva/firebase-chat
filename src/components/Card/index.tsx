import React from 'react';
import Avatar from '../../assets/images/avatar.png';
import {
  Container,
  LastMessage,
  Bubble,
  TitleMessage,
  TitleCard,
  Message,
} from './styles';

export const Card = () => {
  return (
    <Container>
      <TitleCard>
        <h1>Amigos</h1>
        <Bubble>4</Bubble>
      </TitleCard>
      <LastMessage>
        <h3>Last Message:</h3>
        <TitleMessage>
          <div>
            <img src={Avatar} alt="RP" />
          </div>
          <span>Andrea says:</span>
        </TitleMessage>
        <Message>
          <p>
            Lorem ipsum lorem desc meth math Olivers destiny. Oh my god, my dad
            is died. Coronavirus die like aids.
          </p>
        </Message>
      </LastMessage>
    </Container>
  );
};
