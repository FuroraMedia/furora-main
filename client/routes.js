import React from 'react';
import { Switch, Route } from 'react-router';
import HomePage from './src/components/home';
import Error404 from './src/components/error/404';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="*" component={Error404} />
  </Switch>
);

export default Routes;
