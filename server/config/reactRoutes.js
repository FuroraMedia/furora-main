import path from 'path';
import React from 'react';

import { Provider } from 'react-redux';
import { RouterContext, match } from 'react-router';
import { renderToStaticMarkup } from 'react-dom/server';

import store from '../../client/store';
import myRoutes from '../../client/routes';

const reactRoutes = (app) => {
  console.log('here')
  
  app.use((req, res) => {
    match({ routes: myRoutes, location: req.url }, (err, redirect, props) => {
      if (err) {
        res.status(500).send(err.message);
      } else if (redirect) {
        res.redirect(302, redirect.pathname + redirect.search);
      } else if (props) {
        const body = renderToStaticMarkup(
        React.createElement(Provider, { store },
          React.createElement(RouterContext, props),
        ),
      );
        res.status(200).render('index', { body });
      } else {
        res.status(404).send('Not found');
      }
    });
  });
};

export default reactRoutes;
