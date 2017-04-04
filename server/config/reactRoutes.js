import React from 'react';
import ReactDOMServer from 'react-dom/server';
import ServerApp from '../../client/ServerApp';

const reactRoutes = (app) => {
  // app.use((req, res) => {
  //   const context = {};
  //   const body = ReactDOMServer.renderToString(React.createElement(StaticRouter, {
  //     location: req.url,
  //     context,
  //   }, React.createElement(App)));
  //   res.status(200).render('index', { body });
  //   res.end();
  // });
  app.use((req, res) => {
    const context = {};
    // const body = ReactDOMServer.renderToString(
    //   <StaticRouter location={req.url} context={context}>
    //     <App />
    //   </StaticRouter>
    // );
    const body = ReactDOMServer.renderToString(React.createElement(ServerApp, {
      reqUrl: req.url,
      context,
    }));

    // context.url will contain the URL to redirect to if a <Redirect> was used
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
