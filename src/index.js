import React from 'react';
import ReactDOM from 'react-dom';
import LandingBanks from './LandingBanks';

import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
      <LandingBanks />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
