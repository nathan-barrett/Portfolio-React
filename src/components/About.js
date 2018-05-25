import React from 'react';
import { css } from 'emotion';

import AboutText from '../components/AboutText';
import AboutImage from '../components/AboutImage';
import SectionText from '../components/SectionText';

const sectionStyle = css({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  marginBottom: 50,
});

const About = () => (
  <div className={sectionStyle}>
    <SectionText
      text="About"
    />
    <AboutImage />
    <AboutText />
  </div>
);

export default About;
