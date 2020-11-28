import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from './styles';
import 'firebase/auth';
import {
  CreateUserWithEmailAndPassword,
  ErrorFirebase,
} from '../../services/firebase';

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState({} as ErrorFirebase);
  const routerHistory = useHistory();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    } else {
      setConfirmPassword(e.target.value);
    }
  };

  const onSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
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
    [email, password, routerHistory],
  );

  return (
    <Container>
      <form action="submit" onSubmit={onSubmit}>
        <input name="email" type="email" value={email} onChange={onChange} />
        <input
          name="password"
          type="password"
          value={password}
          onChange={onChange}
        />
        <input
          name="confirm-password"
          type="password"
          value={confirmPassword}
          onChange={onChange}
        />

        {!!error && <span>{error.message}</span>}
        <button type="submit">Send</button>
      </form>
    </Container>
  );
};
