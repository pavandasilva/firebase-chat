/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/alt-text */
import { uid } from 'uid';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import React, { useRef, useState } from 'react';
import { FaAdjust, FaTools, FaAlignJustify } from 'react-icons/fa';
import firebase from 'firebase/app';
import { useHistory } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Card, SendMessageInput } from '../../components';
import 'firebase/firestore';

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
  Li,
} from './styles';
import { Message, RomModel } from '../../interfaces';

export const Home = () => {
  const [romSelected, setRomSelected] = useState(0);
  const [user] = useAuthState(firebase.auth());
  const romsRef = firebase.firestore().collection('roms');
  const query = romsRef.limit(10);
  const [roms] = (useCollectionData(query) as unknown) as RomModel[][];
  const messagesRef = firebase.firestore().collection('messages');
  const { push: routerPush } = useHistory();

  const queryMessages = messagesRef
    .where('romUid', '==', roms?.length ? roms[romSelected].uid : '')
    .limit(50);

  const [messages] = (useCollectionData(
    queryMessages,
  ) as unknown) as Message[][];
  const handleSendingMessages = (value: string) => {
    if (!value) {
      return;
    }

    const newUid = uid();

    const data = {
      uid: newUid,
      romUid: roms[romSelected].uid,
      message: value,
      createdAt: Date.now(),
      user: {
        uid: user?.uid,
        displayName: user?.displayName,
        photoURL: user?.photoURL,
      },
    };

    firebase
      .firestore()
      .collection('messages')
      .doc(newUid)
      .set(data)
      .catch(error => console.log(error));
  };

  const handleRomClick = (indexRom: number) => {
    setRomSelected(indexRom);
  };

  const signOutClick = async () => {
    firebase.auth().signOut;
    routerPush('/sign-in');
  };

  const dummy = useRef<HTMLDivElement>(null);

  const handleAvatarClick = () => {
    console.log('handleAvatarClick');

    dummy?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Wrapper>
      <Container>
        <Aside>
          <header>
            <span>MY CHAT</span>
          </header>
          <Profile>
            <div onClick={handleAvatarClick} aria-hidden="true">
              {user?.photoURL && <img src={user?.photoURL} />}
            </div>
            <strong>{user?.displayName}</strong>
            <p>{user?.email}</p>
            <Button onClick={signOutClick}>Sign Out</Button>
          </Profile>
          <Roms>
            <strong>ROMS</strong>
            <ul>
              {roms?.map((rom, index) => (
                <Li
                  key={rom.uid}
                  selected={index === romSelected}
                  onClick={() => handleRomClick(index)}
                >
                  #{rom.name}
                </Li>
              ))}
            </ul>
          </Roms>
        </Aside>

        <Main>
          <header>
            <Hamburger>
              <FaAlignJustify />
            </Hamburger>
            <Title>#{roms?.length && roms[romSelected].name}</Title>
            <Nav>
              <FaTools />
              <FaAdjust />
            </Nav>
          </header>
          <Messages>
            {messages?.length &&
              messages.map(message => {
                return (
                  <Card
                    type={user?.uid === message?.user?.uid ? 'left' : 'right'}
                    avatar={message?.user?.photoURL as string}
                    displayName={message?.user?.displayName as string}
                  >
                    {message.message}
                  </Card>
                );
              })}

            <div ref={dummy} />
          </Messages>
          <footer>
            <SendMessageInput
              handleSendingMessagesProp={handleSendingMessages}
            />
          </footer>
        </Main>
      </Container>
    </Wrapper>
  );
};
