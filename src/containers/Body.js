import React from 'react';
import styled from 'react-emotion';

import AboutText from '../components/AboutText';
import AboutImage from '../components/AboutImage';

const BodyContainer = styled('div')({
  display: 'flex',
  // justifyContent: 'center',
  alignItems: 'center',
  p: {
    color: 'purple',
  },
});

const Body = () => (
  <BodyContainer>
    <AboutText />
    <AboutImage />
  </BodyContainer>
);


export default Body;
