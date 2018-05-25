import React from 'react';
import styled from 'react-emotion';
import { Switch, Route } from 'react-router-dom';

import About from '../components/About';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';

const BodyContainer = styled('div')({
  height: '100%',
});


const Body = () => (
  <BodyContainer>
    <Switch>
      <Route exact path="/" component={About} />
      <Route exact path="/skills" component={Skills} />
      <Route exact path="/portfolio" component={Portfolio} />
    </Switch>
  </BodyContainer>
);


export default Body;
