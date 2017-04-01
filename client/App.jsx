import React from 'react';
import { Provider } from 'react-redux';
// import { BrowserRouter as Router } from 'react-router';
import Layout from './src/components/Layout';
import store from './Store';
// import routes from './routes';
import './public/styles/shared.scss';

const App = () => (
  <Provider store={store} key="provider">
    <Layout />
  </Provider>
);

export default App;
