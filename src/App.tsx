import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from 'firebase/app';
import { Home, Register, SignIn } from './pages';
import GlobalStyle from './styles/global';
import { darkTheme } from './styles/themes';

import 'firebase/firestore';
import 'react-perfect-scrollbar/dist/css/styles.css';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  });
}

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
        </Switch>
      </Router>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
