import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './src/components/App';
import HomePage from './src/components/home/HomePage';
// import ProductViewPage from './components/productView/ProductViewPage';
import error404 from './src/components/error/404';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    {/* <Route path="/about" component={AboutPage} />
    <Route path="products" component={ProductListPage} /> */}
    <Route path="*" component={error404} />
  </Route>
);
