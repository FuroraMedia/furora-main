import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './src/components/App';
import HomePage from './src/components/home/HomePage';
import About from './src/components/about/About';
// import ProductViewPage from './components/productView/ProductViewPage';
import Error404 from './src/components/error/404';

module.exports = (
  <Route path="/" component={Layout}>
    <IndexRoute component={HomePage} />
    <Route path="/about" component={About} />
    <Route path="*" component={Error404} />
  </Route>
);
