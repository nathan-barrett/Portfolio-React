import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';

const TextContainer = styled('div')({
  width: '80%',
  p: {
    color: 'grey',
    textAlign: 'center',
  },
});

const AboutText = () => (
  <TextContainer>
    <p>Hello! I&apos;m  a Portland based Web Developer. I have several years of experience in leading teams and working with all sorts of people.In April 2018, I gradauted from Epicdous, a vocational coding school in Portland - where I learned the fundementals of web development, including: CSS, HTML, and Javascript. I love to create usable and intuitive interfaces that make sense to the user.</p>
    <p>Interested in working together? Contact me and lets grab coffee!</p>
  </TextContainer>
);

export default AboutText;
