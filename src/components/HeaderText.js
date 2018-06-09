import React from 'react';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';


const HeaderName = styled('h1')({
  color: '#90D3E3',
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
  <Link to="/"><HeaderName>Nathan Barrett</HeaderName></Link>
);

export default HeaderText;
