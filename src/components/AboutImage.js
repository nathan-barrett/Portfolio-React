import React from 'react';
import { css } from 'emotion';


const imgStyle = css({
  maxWidth: '100%',
  height: 180,
  borderRadius: 80,
  '@media (min-width: 500px)': {
    height: 250,
  },
});

const AboutImage = () => (
  <img
    src="https://github.com/nathan-barrett/Portfolio-React/blob/master/src/aboutImage.jpg?raw=true"
    alt="it me!"
    className={imgStyle}
  />
);


export default AboutImage;
