import React from 'react';
import styled from 'react-emotion';

import HeaderText from '../components/HeaderText';
import NavBar from '../components/NavBar';

const HeaderContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  borderBottom: '2px solid #90D3E3',
});

const Header = () => (
  <HeaderContainer>
    <HeaderText />
    <NavBar />
  </HeaderContainer>
);

export default Header;
