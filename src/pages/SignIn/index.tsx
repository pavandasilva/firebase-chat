import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaLock, FaEnvelope, FaEye } from 'react-icons/fa';
import { SignInWithEmailAndPassword } from '../../services/firebase';
import { Container, Wrapper, Navigator, Inputs } from './styles';
import { Input } from '../../components';

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
    <Wrapper>
      <Container>
        <Navigator>
          <Link to="signin">
            <span>SIGN IN</span>
          </Link>
          <Link to="register">
            <span>REGISTER</span>
          </Link>
        </Navigator>
        <form action="submit" onSubmit={onSubmit}>
          <div>
            <span>TYPE EMAIL AND PASSWORD</span>
          </div>
          <Inputs>
            <Input
              name="email"
              value={email}
              onChange={onChange}
              startIcon={FaEnvelope}
            />
            <Input
              name="password"
              type="password"
              value={password}
              onChange={onChange}
              startIcon={FaLock}
            />
          </Inputs>
        </form>
      </Container>
    </Wrapper>
  );
};
