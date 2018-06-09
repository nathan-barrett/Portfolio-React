import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'emotion';
import { BrowserRouter } from 'react-router-dom';


import App from './App';

/* eslint-disable */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Raleway:400,700');
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
  * {
    box-sizing: border-box;
  }
  `;
  /* eslint-disable */

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
