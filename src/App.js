import React, { Component } from 'react';
import Body from './containers/Body';
import Header from './containers/Header';

import Footer from './containers/Footer';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
