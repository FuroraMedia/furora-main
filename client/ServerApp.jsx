import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import Layout from './src/components/Layout';
import Store from './Store';
import Routes from './Routes';

// import './public/styles/shared.scss';

const propTypes = {
  reqUrl: PropTypes.string.isRequired,
  context: PropTypes.object.isRequired,
};

const ServerApp = ({
  reqUrl,
  context,
}) => (
  <Provider store={Store} key="provider">
    <Layout>
      <StaticRouter location={reqUrl} context={context}>
        <Routes />
      </StaticRouter>
    </Layout>
  </Provider>
);

ServerApp.propTypes = propTypes;
export default ServerApp;
