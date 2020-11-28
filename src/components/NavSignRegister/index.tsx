import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

interface NavSignRegister {
  currentTab: 'signin' | 'register';
}

export const NavSignRegister = ({ currentTab }: NavSignRegister) => {
  return (
    <Container currentTab={currentTab}>
      <Link to="signin">
        <span>SIGN IN</span>
      </Link>
      <Link to="register">
        <span>REGISTER</span>
      </Link>
    </Container>
  );
};
