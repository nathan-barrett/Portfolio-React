import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';
import Circle from '@fortawesome/fontawesome-free-solid/faCircle';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const TextContainer = styled('div')({
  width: '80%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: 5,
  p: {
    marginBottom: 5,
    color: 'grey',
    textAlign: 'center',
    fontFamily: '"Source Sans Pro", sans-serif',
    '&:last-child': {
      marginTop: 10,
    },
  },
});

const icon = css({
  fontSize: '6px',
  marginBottom: '2px',
});
const skillList = css({
  fontSize: 12,
});


const AboutText = () => (
  <TextContainer>
    <p>Hello! I&apos;m Nathan, a Portland based Web Developer. I love diving into a new code base and creating beautiful, usable applications. </p>
    <p> I strive to learn more and understand new and emerging technologies.</p>
    <p>When I&apos;m not coding I love to read (both novels and comic books) as well as running around beautiful Portland.
    </p>
    <p className={skillList}>
      <FontAwesomeIcon className={icon} color="#ff4500" icon={Circle} />
        React
        <FontAwesomeIcon className={icon} color="#ff4500" icon={Circle} />
        React Native
        <FontAwesomeIcon className={icon} color="#ff4500" icon={Circle} />
        CSS/SCSS
        <FontAwesomeIcon className={icon} color="#ff4500" icon={Circle} />
      <br />
      <FontAwesomeIcon className={icon} color="#ff4500" icon={Circle} />
        Javascript/jQuery
        <FontAwesomeIcon className={icon} color="#ff4500" icon={Circle} />
        Git
        <FontAwesomeIcon className={icon} color="#ff4500" icon={Circle} />
      <br />
      <FontAwesomeIcon className={icon} color="#ff4500" icon={Circle} />
        ES6
        <FontAwesomeIcon className={icon} color="#ff4500" icon={Circle} />
          Angular 5
        <FontAwesomeIcon className={icon} color="#ff4500" icon={Circle} />
        NodeJS
          <FontAwesomeIcon className={icon} color="#ff4500" icon={Circle} />
    </p>
    <p>Wanna work together? Let&apos;s grab a coffee!</p>
  </TextContainer>
);

export default AboutText;
