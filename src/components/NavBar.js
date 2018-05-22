import React from 'react';
import { css } from 'emotion';

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
  },
});

const Navbar = () => (
  <ul className={NavContainer}>
    <li>about</li>
    <li>portfolio</li>
    <li>contact</li>
  </ul>
);

export default Navbar;
