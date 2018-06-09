import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Envelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
import Github from '@fortawesome/fontawesome-free-brands/faGithub';
import LinkedIn from '@fortawesome/fontawesome-free-brands/faLinkedin';
import Twitter from '@fortawesome/fontawesome-free-brands/faTwitter';

const FooterContainer = styled('div')({
  height: 50,
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  borderTop: '2px solid #ff4500',
  backgroundColor: 'white',
  paddingLeft: 10,
  paddingRight: 10,
});

const IconContainer = styled('div')({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  h1: {
    fontFamily: '"Raleway", sans-serif',
    color: '#ff4500',
    marginBottom: 0,
  },
});

const iconStyle = css({
  marginLeft: 7,
  marginRight: 7,
});

const Footer = () => (
  <FooterContainer>
    <IconContainer>
      <h1>nb</h1>
      <div>
        <a href="mailto:demeules.barrett@gmail.com?Subject=Hello!">
          <FontAwesomeIcon className={iconStyle} color="#4183C4" icon={Envelope} size="lg" />
        </a>
        <a href="https://twitter.com/barrettnathan" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className={iconStyle} color="#4183C4" icon={Twitter} size="lg" />
        </a>
        <a href="https://github.com/nathan-barrett" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className={iconStyle} color="#4183C4" icon={Github} size="lg" />
        </a>
        <a href="https://www.linkedin.com/in/nathanbarrett24" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className={iconStyle} color="#4183C4" icon={LinkedIn} size="lg" />
        </a>
      </div>
    </IconContainer>
  </FooterContainer>
);

export default Footer;
