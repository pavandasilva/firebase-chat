/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaLock, FaEnvelope } from 'react-icons/fa';
import { SignInWithEmailAndPassword } from '../../services/firebase';
import { Container, Wrapper, Inputs, RememberMe } from './styles';
import { Input, NavSignRegister } from '../../components';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const routerHistory = useHistory();

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  }, []);

  const onSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      const response = await SignInWithEmailAndPassword(email, password);

      if (response?.data) {
        routerHistory.push('/');
      }
    },
    [email, password, routerHistory],
  );

  const handleChangeRememberMe = useCallback(() => {
    setRememberMe(rem => !rem);
  }, []);

  return (
    <Wrapper>
      <Container>
        <NavSignRegister currentTab="signin" />
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
            <RememberMe>
              <div>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={handleChangeRememberMe}
                />
                <span>Remember me</span>
              </div>

              <Link to="/forgotPassword">Forgot Password? </Link>
            </RememberMe>
          </Inputs>
          <button type="submit">Sign In Now </button>
        </form>
      </Container>
    </Wrapper>
  );
};
