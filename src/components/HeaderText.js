import React from 'react';
import styled from 'react-emotion';

const HeaderName = styled('h1')({
  color: '#ff4500',
  fontFamily: '"Raleway", sans-serif',
  letterSpacing: '1px',
  fontSize: '2.5em',
  marginTop: 5,
  marginBottom: 5,
  fontWeight: '600',
  textAlign: 'center',
});

const HeaderText = () => (
  <HeaderName>Nathan Barrett</HeaderName>
);

export default HeaderText;
