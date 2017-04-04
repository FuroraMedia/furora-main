import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Layout from './src/components/Layout';
import Store from './Store';
import Routes from './Routes';
// const propTypes = {
//   children: PropTypes.object.isRequired,
// };

import './public/styles/shared.scss';

const App = () => (
  <Provider store={Store} key="provider">
    <Layout>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Layout>
  </Provider>
);


// Layout.propTypes = propTypes;

export default App;
