import React from 'react';
import { Switch, Route } from 'react-router';
import Layout from './src/components/Layout';
// import HomePage from './src/components/home/HomePage';
import Error404 from './src/components/error/404';

export default(
  <Switch>
    <Route exact path="/" component={Layout} />
    <Route path="*" component={Error404} />
  </Switch>

// <Route path="/" component={Layout}>
//   <IndexRoute component={HomePage} />
//   <Route path="*" component={Error404} />
// </Route>
);
