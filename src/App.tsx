import React from 'react';
import { Router } from 'react-router-dom';

import firebase from 'firebase/app';
import 'firebase/firestore';

import { Routes } from './routes/routes';

firebase.initializeApp({
  apiKey: 'AIzaSyDBolDVA5Ob3TqHVbzhH4qZdcCYkuojCYI',
  authDomain: 'chat-7a2be.firebaseapp.com',
  databaseURL: 'https://chat-7a2be.firebaseio.com',
  projectId: 'chat-7a2be',
  storageBucket: 'chat-7a2be.appspot.com',
  messagingSenderId: '257130550430',
  appId: '1:257130550430:web:2802356afb733308d8d78f',
  measurementId: 'G-DG8CXPBKGW',
});

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
