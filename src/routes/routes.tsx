import React from 'react'
import { Switch } from 'react-router-dom'
import { SignIn } from '../pages'
import { Route } from './route'

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/signin" component={SignIn} />
  </Switch>
)
