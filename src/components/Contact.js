import React from 'react';
import styled from 'react-emotion';
// import { css } from 'emotion';
// import { Icon } from 'semantic-ui-react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Envelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
// import Circle from '@fortawesome/fontawesome-free-solid/faCircle';
import LinkedIn from '@fortawesome/fontawesome-free-brands/faLinkedin';
import GitHub from '@fortawesome/fontawesome-free-brands/faGithub';
import Twitter from '@fortawesome/fontawesome-free-brands/faTwitter';


import SectionText from './SectionText';


const ContactContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  paddingTop: 30,
  alignItems: 'center',
  h3: {
    color: 'grey',
    marginBottom: 40,
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
    margin: '2%',
  },
  h2: {
    width: '80%',
    textAlign: 'center',
    marginLeft: '10%',
    marginRight: '10%',
  },
});

const IconRow = styled('div')({
  width: '90%',
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: 30,
  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '50%',
    p: {
      fontSize: 12,
      color: 'grey',
    },
  },
});


const Contact = () => (
  <div>
    <SectionText
      text="Contact"
    />
    <ContactContainer>
      <h3>lets connect and work together</h3>
      <IconRow>
        <div>
          <a href="https://twitter.com/barrettnathan" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              color="#4183C4"
              size="5x"
              icon={Twitter}
            />
          </a>
          <p>/barrettnathan</p>
        </div>
        <div>
          <a href="https://github.com/nathan-barrett" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              color="#4183C4"
              size="5x"
              icon={GitHub}
            />
          </a>
          <p>/barrett-nathan</p>
        </div>
      </IconRow>
      <IconRow>
        <div>
          <a href="mailto:demeules.barrett@gmail.com?Subject=Hello!">
            <FontAwesomeIcon
              color="#4183C4"
              size="5x"
              icon={Envelope}
            />
          </a>
          <p>demeules.barrett@gmail.com</p>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/nathanbarrett24" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              size="5x"
              color="#4183C4"
              icon={LinkedIn}
            />
          </a>
          <p>/in/nathanbarrett24</p>
        </div>
      </IconRow>
    </ContactContainer>
  </div>
);


export default Contact;
