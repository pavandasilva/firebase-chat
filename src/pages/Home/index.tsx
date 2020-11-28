import React from 'react';
import { Card } from '../../components';

import { Wrapper, Container, Aside, Content } from './styles';

export const Home = () => {
  return (
    <Wrapper>
      <Container>
        <Aside>
          <h1>Roms</h1>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Aside>
        <Content>
          <header>header</header>
          <div>Chat</div>
        </Content>
      </Container>
    </Wrapper>
  );
};
