import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { Container, Inputs, Wrapper } from './styles';
import 'firebase/auth';
import {
  CreateUserWithEmailAndPassword,
  ErrorFirebase,
} from '../../services/firebase';
import { NavSignRegister, Input } from '../../components';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState({} as ErrorFirebase);
  const routerHistory = useHistory();

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    } else {
      setConfirmPassword(e.target.value);
    }
  }, []);

  const onSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      if (password !== confirmPassword) {
        const newError: ErrorFirebase = {
          code: '',
          message: 'Passwords are not the same',
        };

        setError(newError);
        return;
      }

      const { error: createUserError } = await CreateUserWithEmailAndPassword(
        email,
        password,
      );

      if (createUserError) {
        setError(createUserError);
      } else {
        routerHistory.push('/signin');
      }
    },
    [confirmPassword, email, password, routerHistory],
  );

  return (
    <>
      <Wrapper>
        <Container>
          <NavSignRegister currentTab="register" />
          <form action="submit" onSubmit={onSubmit}>
            <div>
              <span>HELLO THERE!</span>
              {!!error && <span>{error.message}</span>}
            </div>
            <Inputs>
              <Input
                name="email"
                placeholder="E-mail"
                value={email}
                onChange={onChange}
                startIcon={FaEnvelope}
              />
              <Input
                name="password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={onChange}
                startIcon={FaLock}
              />
              <Input
                name="confirm-password"
                placeholder="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={onChange}
                startIcon={FaLock}
              />
            </Inputs>
            <button type="submit">Register </button>
          </form>
        </Container>
      </Wrapper>
    </>
  );
};
