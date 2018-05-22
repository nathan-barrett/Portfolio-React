import React, { Component } from 'react';
import Body from './containers/Body';
import Header from './containers/Header';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
