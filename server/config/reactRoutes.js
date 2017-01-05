import path from 'path';
import React from 'react';
import fs from 'fs';

import { Provider } from 'react-redux';
import { RouterContext, match } from 'react-router';
import { renderToStaticMarkup } from 'react-dom/server';

import store from '../../client/store';
import myRoutes from '../../client/routes';
const cssPath = path.join(__dirname, '../../client/dist/styles.css');

const reactRoutes = (app) => {

  app.use((req, res) => {
    match({ routes: myRoutes, location: req.url }, (err, redirect, props) => {
      if (err) {
        res.status(500).send(err.message);
      } else if (redirect) {
        res.redirect(302, redirect.pathname + redirect.search);
      } else if (props) {
        const css = fs.readFileSync(cssPath, 'utf-8');
        const body = renderToStaticMarkup(
        React.createElement(Provider, { store },
          React.createElement(RouterContext, props)
        ),
      );
        res.status(200).render('index', { css, body });
      } else {
        res.status(404).send('Not found');
      }
    });
  });
};

export default reactRoutes;
