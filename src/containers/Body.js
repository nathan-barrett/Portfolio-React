import React from 'react';
import styled from 'react-emotion';
import { Switch, Route } from 'react-router-dom';

import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

const BodyContainer = styled('div')({
  height: '100%',
});


const Body = () => (
  <BodyContainer>
    <Switch>
      <Route exact path="/" component={About} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  </BodyContainer>
);


export default Body;
