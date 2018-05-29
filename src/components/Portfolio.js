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
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 10,
  marginBottom: 10,
  '&:hover': {
    backgroundColor: 'purple',
  },
  h3: {

  },
});


const Portfolio = () => (
  <div className={sectionStyle}>
    <SectionText
      text="Portfolio"
    />
    <ProjectItem>
      <h3>For Dogs Only</h3>
    </ProjectItem>
    <ProjectItem>
      <h3>Pokemon JS</h3>
    </ProjectItem>
    <ProjectItem>
      <h3>Animal Town</h3>
    </ProjectItem>
    <ProjectItem>
      <h3>Stardew Gallery</h3>
    </ProjectItem>
    <ProjectItem>
      <h3>Zoo Keeper</h3>
    </ProjectItem>
    <ProjectItem>
      <h3>Tamagatchi</h3>
    </ProjectItem>
  </div>
);

export default Portfolio;
