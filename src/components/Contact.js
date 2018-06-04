import React from 'react';
import styled from 'react-emotion';
import { Icon } from 'semantic-ui-react';

import SectionText from './SectionText';


const ContactContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  alignItems: 'center',
  // width: '80%',
  a: {
    color: 'inherit',
    textDecoration: 'none',
    margin: '2%',
  },
  i: {
  },
  h2: {
    width: '80%',
    textAlign: 'center',
    marginLeft: '10%',
    marginRight: '10%',
  },
});


const Contact = () => (
  <div>
    <SectionText
      text="Contact"
    />
    <ContactContainer>
      <h2>Lets connect and work together!</h2>
      <a href="https://twitter.com/barrettnathan" target="_blank" rel="noopener noreferrer">
        <Icon
          circular
          link
          name="twitter"
          size="big"
        />
      </a>
      <a href="https://github.com/nathan-barrett" target="_blank" rel="noopener noreferrer">
        <Icon
          circular
          name="github"
          size="big"
        />
      </a>
      <a href="mailto:demeules.barrett@gmail.com?Subject=Hello!">
        <Icon
          circular
          name="mail"
          size="big"
        />
      </a>
      <a href="https://www.linkedin.com/in/nathanbarrett24" target="_blank" rel="noopener noreferrer">
        <Icon
          circular
          name="linkedin"
          size="big"
        />
      </a>
    </ContactContainer>
  </div>
);


export default Contact;
