import firebase from 'firebase/app';
import React, { ComponentType } from 'react';
import { Route as ReactRoute, Redirect, RouteProps } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

interface PrivateRouteProps extends RouteProps{
  component: ComponentType,
  isPrivate?: boolean
}

const login = () => {
  firebase.auth().signInWithEmailAndPassword('test@test.com', 'password');
};
const logout = () => {
  firebase.auth().signOut();
};

export function Route ({
  component: Component,
  isPrivate = false,
  ...rest
}: PrivateRouteProps) {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);
  const signed = !!user

  return (
    <ReactRoute {...rest}
      render={() => {
        return isPrivate === signed ? (
          <Component/>
        ) : <Redirect to={{ pathname: isPrivate ? '/signin' : '/' }}/>
      }}
    />)
}
