import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Envelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
import Github from '@fortawesome/fontawesome-free-brands/faGithub';
import LinkedIn from '@fortawesome/fontawesome-free-brands/faLinkedin';

const FooterContainer = styled('div')({
  height: 50,
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  backgroundColor: '#ff4500',
  margin: 0,


});

const IconContainer = styled('div')({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const iconStyle = css({
  marginLeft: 7,
  marginRight: 7,
});

const Footer = () => (
  <FooterContainer>
    <IconContainer>
      <FontAwesomeIcon className={iconStyle} color="grey" icon={Envelope} size="lg" />
      <FontAwesomeIcon className={iconStyle} color="grey" icon={Github} size="lg" />
      <FontAwesomeIcon className={iconStyle} color="grey" icon={LinkedIn} size="lg" />
    </IconContainer>
  </FooterContainer>
);

export default Footer;
