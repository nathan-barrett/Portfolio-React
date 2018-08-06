import React from 'react';
import styled from 'react-emotion';

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
    marginTop: 5,
  },
});

const AboutText = () => (
  <TextContainer>
    <p>
      Hello! I&apos;m Nathan, a Portland based Web Developer. I love diving into a new code base and creating beautiful,
      usable applications.
    </p>
    <p> I strive to learn more and understand new and emerging technologies.</p>
  </TextContainer>
);

export default AboutText;
