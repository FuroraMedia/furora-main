import React from 'react';
import { render } from 'react-dom';

import App from './app';

render(<App isServerRoute={false} />, document.getElementById('app'));
