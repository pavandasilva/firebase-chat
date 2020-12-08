import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

interface NavSignRegisterProps {
  currentTab: 'signin' | 'register';
}

export const NavSignRegister = ({ currentTab }: NavSignRegisterProps) => {
  return (
    <Container currentTab={currentTab}>
      <Link to="sign-in">
        <span>SIGN IN</span>
      </Link>
      <Link to="register">
        <span>REGISTER</span>
      </Link>
    </Container>
  );
};
