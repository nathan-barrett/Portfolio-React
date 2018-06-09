import React, { Component } from 'react';
import { css } from 'emotion';
import Body from './containers/Body';
import Header from './containers/Header';
import Footer from './containers/Footer';


const bodyStyle = css({
  marginLeft: 5,
  marginRight: 5,
});
class App extends Component {
  render() {
    return (
      <div className={bodyStyle}>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
