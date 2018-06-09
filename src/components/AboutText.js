import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';
import Circle from '@fortawesome/fontawesome-free-solid/faCircle';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const TextContainer = styled('div')({
  marginTop: 15,
  width: '80%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: 50,
  p: {
    marginBottom: 5,
    color: 'grey',
    fontSize: '1.3em',
    textAlign: 'center',
    fontFamily: '"Source Sans Pro", sans-serif',
    '&:last-child': {
      marginTop: 10,
    },
    '@media (min-width: 500px)': {
      fontSize: '2.1em',
      marginBottom: 2,
    },
  },
  '@media (min-width: 500px)': {
    width: '50%',
  },
});

const icon = css({
  fontSize: '10px',
  marginLeft: 4,
  marginRight: 4,
  marginBottom: 1,
  '@media (min-width: 500px)': {
    marginBottom: 4,
  },
});
const skillList = css({
  fontSize: 14,
});


const AboutText = () => (
  <TextContainer>
    <p>Hello! I&apos;m Nathan, a Portland based Web Developer. I love diving into a new code base and creating beautiful, usable applications. </p>
    <p> I strive to learn more and understand new and emerging technologies.</p>
    <p>When I&apos;m not coding I love to read (both novels and comic books) as well as running around beautiful Portland.
    </p>
    <p className={skillList}>
      <FontAwesomeIcon className={icon} color="#4183C4" icon={Circle} />
        React
        <FontAwesomeIcon className={icon} color="#4183C4" icon={Circle} />
        React Native
        <FontAwesomeIcon className={icon} color="#4183C4" icon={Circle} />
        CSS/SCSS
        <FontAwesomeIcon className={icon} color="#4183C4" icon={Circle} />
      <br />
      <FontAwesomeIcon className={icon} color="#4183C4" icon={Circle} />
        Javascript/jQuery
        <FontAwesomeIcon className={icon} color="#4183C4" icon={Circle} />
        Git
        <FontAwesomeIcon className={icon} color="#4183C4" icon={Circle} />
      <br />
      <FontAwesomeIcon className={icon} color="#4183C4" icon={Circle} />
        ES6
        <FontAwesomeIcon className={icon} color="#4183C4" icon={Circle} />
          Angular 5
        <FontAwesomeIcon className={icon} color="#4183C4" icon={Circle} />
        NodeJS
          <FontAwesomeIcon className={icon} color="#4183C4" icon={Circle} />
    </p>
  </TextContainer>
);

export default AboutText;
