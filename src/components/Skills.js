import React from 'react';
import { css } from 'emotion';

import SectionText from '../components/SectionText';
import SkillList from '../components/SkillList';

const skillStyle = css({
  display: 'flex',
  flexDirection: 'column',
});

const Skills = () => (
  <div className={skillStyle}>
    <SectionText
      text="Skills"
    />
    <SkillList />
  </div>
);

export default Skills;
