import React from 'react';
import { css } from 'emotion';


const svgStyle = css({
  filter: 'drop-shadow(rgba(255, 255, 255, 0.5) 0px 0px 10px)',
  height: 200,
  width: 174,
  marginTop: 10,
});

const AboutImage = () => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewbox="0 0 173.20508075688772 200"
    className={svgStyle}
  >
    <defs>
      <pattern id="pattern1" height="100%" width="100%" patternContentUnits="objectBoundingBox">
        <image height="1" width="1" preserveAspectRatio="none" xlinkHref="https://github.com/nathan-barrett/Portfolio-React/blob/master/src/aboutImage.jpg?raw=true" />
      </pattern>
    </defs>
    <path fill="url(#pattern1)" d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" />
  </svg>
);

export default AboutImage;
