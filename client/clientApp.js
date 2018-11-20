// @flow
import React from 'react';
import { hydrate } from 'react-dom';

import App from './app';

hydrate(<App isServerRoute={false} />, document.getElementById('app'));
