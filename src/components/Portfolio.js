import React from 'react';
import { css } from 'emotion';
import styled from 'react-emotion';
import SectionText from './SectionText';

const sectionStyle = css({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  marginBottom: 50,
});

const ProjectItem = styled('div')({
  width: '80%',
  backgroundColor: 'grey',
  height: 200,
  marginTop: 10,
  marginBottom: 10,
  '&:hover': {
    backgroundColor: 'purple',
  },
});


const Portfolio = () => (
  <div className={sectionStyle}>
    <SectionText
      text="Portfolio"
    />
    <ProjectItem>
      <h3>First Project</h3>
    </ProjectItem>
    <ProjectItem>
      <h3>First Project</h3>
    </ProjectItem>
    <ProjectItem>
      <h3>First Project</h3>
    </ProjectItem>
    <ProjectItem>
      <h3>First Project</h3>
    </ProjectItem>
    <ProjectItem>
      <h3>First Project</h3>
    </ProjectItem>
    <ProjectItem>
      <h3>First Project</h3>
    </ProjectItem>
  </div>
);

export default Portfolio;
