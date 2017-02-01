import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './src/components/App';
import HomePage from './src/components/home/HomePage';
import Error404 from './src/components/error/404';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={HomePage} />
    <Route path="*" component={Error404} />
  </Route>
);
