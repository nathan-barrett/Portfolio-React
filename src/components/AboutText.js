import React from 'react';
import styled from 'react-emotion';
import { Button } from 'semantic-ui-react';

const TextContainer = styled('div')({
  width: '80%',
  p: {
    color: 'grey',
    textAlign: 'center',
    fontFamily: '"Source Sans Pro", sans-serif',
  },
});

const AboutText = () => (
  <TextContainer>
    <p>Hello! I&apos;m  a Portland based Web Developer. <br />In April 2018, I gradauted from Epicdous, a vocational coding school, - where I learned the fundementals of web development, including: CSS, HTML, and Javascript. <br />I love to create usable and intuitive interfaces that make sense to the user.</p>
    <p>Interested in working together? <br />Lets grab coffee!</p>
    <Button
      content="View Repository"
    />
  </TextContainer>
);

export default AboutText;
