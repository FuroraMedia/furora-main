import path from 'path';
import React from 'react';

import { Provider } from 'react-redux';
import { RouterContext, match } from 'react-router';
import { renderToString } from 'react-dom/server';

import _ from 'lodash';
import fs from 'fs';

//import Store from '../../client/src/store/configureStore';
import Routes from '../../client/routes';

//const store = Store.store;
const baseTemplate = fs.readFileSync(path.join(__dirname, '../index.html'));
const template = _.template(baseTemplate);

const reactRoutes = (app) => {
  app.use((req, res) => {
    match({ routes: Routes, location: req.url }, (err, redirect, props) => {
      if (err) {
        res.status(500).send(err.message);
      } else if (redirect) {
        res.redirect(302, redirect.pathname + redirect.search);
      } else if (props) {
        const body = renderToString(<RouterContext {...props} />);
        res.status(200).send(template({ body }));
      } else {
        res.status(404).send('Not found');
      }
    });
  });
};

export default reactRoutes;
