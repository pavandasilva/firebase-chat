/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Link, useHistory } from 'react-router-dom';
import { FaLock, FaEnvelope, FaGoogle } from 'react-icons/fa';
import {
  ErrorFirebase,
  SignInWithEmailAndPassword,
} from '../../services/firebase';
import { Container, Wrapper, Inputs, RememberMe } from './styles';
import { Input, NavSignRegister } from '../../components';
import { Button } from '../../components/Button';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState({} as ErrorFirebase);
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [requesting, setRequesting] = useState(false);
  const routerHistory = useHistory();

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setError({} as ErrorFirebase);

    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  }, []);

  const onSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      setError({} as ErrorFirebase);
      setRequesting(true);
      const response = await SignInWithEmailAndPassword(email, password);
      setRequesting(false);

      if (response?.error) {
        setError(response.error);
        return;
      }

      if (response?.data) {
        routerHistory.push('/');
      }
    },
    [email, password, routerHistory],
  );

  const handleChangeRememberMe = useCallback(() => {
    setRememberMe(rem => !rem);
  }, []);

  const handleGoogleOnClick = useCallback(() => {
    const googleProvider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(googleProvider);
  }, []);

  return (
    <Wrapper>
      <Container>
        <NavSignRegister currentTab="signin" />
        <form action="submit" onSubmit={onSubmit}>
          <div>
            <span>TYPE EMAIL AND PASSWORD</span>
            {!!error && <strong>{error.message}</strong>}
          </div>
          <Inputs>
            <Input
              name="email"
              value={email}
              onChange={onChange}
              startIcon={FaEnvelope}
              title="E-mail"
              placeholder="E-mail"
            />
            <Input
              name="password"
              type="password"
              value={password}
              onChange={onChange}
              startIcon={FaLock}
              title="Password"
              placeholder="Password"
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
          <Button type="submit" showSpinner={requesting}>
            Sign In Now
          </Button>
          <Button
            type="button"
            showSpinner={false}
            onClick={handleGoogleOnClick}
          >
            <div>
              <FaGoogle />
            </div>
            <span>Sign in with Google</span>
          </Button>
        </form>
      </Container>
    </Wrapper>
  );
};
