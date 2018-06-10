import React from 'react';
import { css } from 'emotion';
import { Link } from 'react-router-dom';

const NavContainer = css({
  listStyleType: 'none',
  display: 'flex',
  justifyContent: 'center',
  padding: 0,
  marginTop: 5,
  li: {
    color: '#4183C4',
    fontSize: '1.2em',
    paddingLeft: 5,
    paddingRight: 5,
    fontFamily: '"Source Sans Pro", sans-serif',
    '@media (min-width: 500px)': {
      fontSize: '1.8em',
    },
  },
});

const Navbar = () => (
  <ul className={NavContainer}>
    <li><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">about</Link></li>
    <li><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/portfolio">portfolio</Link></li>
    <li><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/contact">contact</Link></li>
  </ul>
);

export default Navbar;
