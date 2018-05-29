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
  background: 'center no-repeat url("https://github.com/nathan-barrett/Portfolio-React/blob/master/src/FiDO.png?raw=true")',
  backgroundSize: 'contain',
  height: 200,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 10,
  marginBottom: 10,
  '&:hover': {
    backgroundColor: 'purple',
  },
  '&: first-child': {
    background: 'url("https://github.com/nathan-barrett/Portfolio-React/blob/master/src/FiDO.png?raw=true")',
  },
  h3: {

  },
});


const Portfolio = () => (
  <div className={sectionStyle}>
    <SectionText
      text="Portfolio"
    />
    <ProjectItem
      background="https://github.com/nathan-barrett/Portfolio-React/blob/master/src/FiDO.png?raw=true"
    >
      <h3>For Dogs Only</h3>
    </ProjectItem>
    <ProjectItem
      background="https://github.com/nathan-barrett/Portfolio-React/blob/master/src/FiDO.png?raw=true"
    >
      <h3>Pokemon JS</h3>
    </ProjectItem>
    <ProjectItem
      background="https://github.com/nathan-barrett/Portfolio-React/blob/master/src/FiDO.png?raw=true"
    >
      <h3>Animal Town</h3>
    </ProjectItem>
    <ProjectItem
      background="https://github.com/nathan-barrett/Portfolio-React/blob/master/src/FiDO.png?raw=true"
    >
      <h3>Stardew Gallery</h3>
    </ProjectItem>
    <ProjectItem
      background="https://github.com/nathan-barrett/Portfolio-React/blob/master/src/FiDO.png?raw=true"
    >
      <h3>Zoo Keeper</h3>
    </ProjectItem>
    <ProjectItem
      background="https://github.com/nathan-barrett/Portfolio-React/blob/master/src/FiDO.png?raw=true"
    >
      <h3>Tamagatchi</h3>
    </ProjectItem>
  </div>
);

export default Portfolio;
