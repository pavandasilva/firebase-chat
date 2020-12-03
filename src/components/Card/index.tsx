import React, { ReactNode } from 'react';
import { Container, Avatar, Info, Text, Header } from './styles';

interface CardProps {
  type: 'right' | 'left';
  children: ReactNode;
  avatar: string;
  displayName: string;
}

interface DomAvatar {
  photoUrl?: string;
}

const DomAvatar = ({ photoUrl }: DomAvatar) => (
  <Avatar>{photoUrl && <img src={photoUrl} alt="" />}</Avatar>
);

export const Card = ({ type, children, avatar, displayName }: CardProps) => {
  return (
    <Container type={type}>
      <Header type={type}>
        {type === 'left' && <DomAvatar photoUrl={avatar} />}

        <Info type={type}>
          <strong>{displayName}</strong>
          <span>Today 12:30am</span>
        </Info>

        {type === 'right' && <DomAvatar photoUrl={avatar} />}
      </Header>
      <Text>
        <p>{children}</p>
      </Text>
    </Container>
  );
};
