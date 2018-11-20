import React from 'react';
import ReactDOMServer from 'react-dom/server';
import ServerApp from '../../client/main';

const reactRoutes = (app) => {
  app.use((req, res) => {
    const context = {};

    const body = ReactDOMServer.renderToString(React.createElement(ServerApp, {
      isServerRoute: true,
      reqUrl: req.url,
      context,
    }));

    if (context.url) {
      res.writeHead(302, { Location: context.url });
      res.end();
    } else {
      res.status(200).render('index', { body });
      res.end();
    }
  });
};
export default reactRoutes;
