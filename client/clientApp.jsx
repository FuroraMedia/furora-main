import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import store from './store';
import './public/styles/shared.scss';

console.log(store.getState())

const App = () => (
  <Provider store={store} key="provider">
    <Router history={browserHistory} routes={routes} />
  </Provider>
);


export default App;
