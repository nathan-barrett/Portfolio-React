import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'emotion';
import App from './App';

/* eslint-disable */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Raleway');
  * {
    box-sizing: border-box;
    margin-left: 2px;
    margin-right: 2px;
  }
  :root {
    --primaryText: 'orange'
    --secondaryText: 'blue'
  }
  `;
  /* eslint-disable */

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
