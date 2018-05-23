import React from 'react';
import styled from 'react-emotion';

import AboutText from '../components/AboutText';
import AboutImage from '../components/AboutImage';

const BodyContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  p: {
    color: 'purple',
  },
});

const Body = () => (
  <BodyContainer>
    <AboutImage />
    <AboutText />
  </BodyContainer>
);


export default Body;
