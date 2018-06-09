import React from 'react';
import styled from 'react-emotion';

const HeaderName = styled('h1')({
  color: '#ff4500',
  fontFamily: '"Raleway", sans-serif',
  letterSpacing: '1px',
  fontSize: '2.5em',
  paddingTop: 20,
  marginBottom: 5,
  fontWeight: 'bold',
  textAlign: 'center',
  '@media (min-width: 500px)': {
    fontSize: '4em',
  },
});

const HeaderText = () => (
  <HeaderName>Nathan Barrett</HeaderName>
);

export default HeaderText;
