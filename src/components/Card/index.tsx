import React from 'react';
import Photo from '../../assets/images/avatar.png';
import { Container, Avatar, Info, Text, Header } from './styles';

interface CardProps {
  type: 'right' | 'left';
}

const DomAvatar = () => (
  <Avatar>
    <img src={Photo} alt="" />
  </Avatar>
);

export const Card = ({ type }: CardProps) => {
  return (
    <Container type={type}>
      <Header type={type}>
        {type === 'left' && <DomAvatar />}

        <Info type={type}>
          <strong>Name</strong>
          <span>Today 12:30am</span>
        </Info>

        {type === 'right' && <DomAvatar />}
      </Header>
      <Text>
        <p>
          Consectetur excepteur commodo deserunt pariatur irure quis et ad.
          Consequat dolore sunt irure nostrud consequat ex eu irure laboris
          sint. Enim cillum officia est dolore. Sint adipisicing ut enim velit
          fugiat enim dolor eiusmod commodo. Ex ipsum non cillum eu consectetur
          magna. Laboris laboris nostrud amet sunt laborum do Lorem commodo
          cupidatat esse occaecat id. Amet mollit occaecat voluptate aliqua qui
          et. Excepteur adipisicing deserunt non officia aute ea et ea irure.
          Exercitation in magna quis sunt cupidatat voluptate elit cillum
          nostrud in. Irure id dolor laboris laborum eu dolor. Id proident
          veniam officia consectetur velit consectetur labore. Enim dolore
          reprehenderit nulla enim ea laborum velit do in laboris occaecat.
          Laborum nulla ipsum aute adipisicing exercitation laboris mollit. Duis
          nisi eiusmod consectetur duis qui ea ad reprehenderit enim
          consectetur. Do occaecat ex pariatur nostrud ex id labore ut
          consectetur pariatur.
        </p>
      </Text>
    </Container>
  );
};
