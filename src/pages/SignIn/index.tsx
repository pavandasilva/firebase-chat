import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SignInWithEmailAndPassword } from '../../services/firebase';
import { Container } from './styles';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const routerHistory = useHistory();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const response = await SignInWithEmailAndPassword(email, password);

    if (response?.data) {
      routerHistory.push('/');
    }
  };
  return (
    <Container>
      <h1>SignIn</h1>
      <form action="submit" onSubmit={onSubmit}>
        <input name="email" value={email} onChange={onChange} />
        <input name="password" value={password} onChange={onChange} />
        <button type="submit">Enter</button>
      </form>
    </Container>
  );
};
