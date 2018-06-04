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
    color: 'grey',
    paddingLeft: 5,
    paddingRight: 5,
    fontFamily: '"Source Sans Pro", sans-serif',
  },
});

const Navbar = () => (
  <ul className={NavContainer}>
    <li><Link to="/">about</Link></li>
    <li><Link to="/portfolio">portfolio</Link></li>
    <li><Link to="/contact">contact</Link></li>
  </ul>
);

export default Navbar;
