import React from 'react';
import { css } from 'emotion';


const imgStyle = css({
  maxWidth: '100%',
  height: 180,
  borderRadius: 80,
  border: '5px solid grey',
  // boxShadow: '2px 2px 2px 0px pink',
});

const AboutImage = () => (
  <img
    src="https://github.com/nathan-barrett/Portfolio-React/blob/master/src/aboutImage.jpg?raw=true"
    alt="it me!"
    className={imgStyle}
  />
);


export default AboutImage;
