import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';

// const SkillContainer = styled('ul')({
//   listStyleType: 'none',
//   padding: 0,
//   display: 'flex',
//   li: {
//     fontFamily: '"Source Sans Pro", sans-serif',
//     color: 'grey',
//   },
// });

const SkillContainer = styled('div')({
  h2: {
    fontFamily: '"Source Sans Pro", sans-serif',
    color: 'grey',
    paddingLeft: 25,
    width: 100,
  },
});
const SkillRow = styled('div')({
  flexDirection: 'row',
  display: 'flex',
});

const circleContainer = css({
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: 15,
});
const OrangeCircle = styled('div')({
  height: 40,
  width: 40,
  backgroundColor: '#ff4500',
  borderRadius: 50,
  alignSelf: 'center',
});

const SkillList = () => (
  <SkillContainer>
    <SkillRow>
      <h2>React / Redux</h2>
      <div className={circleContainer}>
        <OrangeCircle />
        <OrangeCircle />
        <OrangeCircle />
        <OrangeCircle />
      </div>
    </SkillRow>
    <SkillRow>
      <h2>React Native</h2>
      <div className={circleContainer}>
        <OrangeCircle />
        <OrangeCircle />
        <OrangeCircle />
        <OrangeCircle />
        <OrangeCircle />
      </div>
    </SkillRow>
    <SkillRow>
      <h2>Git</h2>
      <div className={circleContainer}>
        <OrangeCircle />
        <OrangeCircle />
        <OrangeCircle />
        <OrangeCircle />
      </div>
    </SkillRow>
    <SkillRow>
      <h2>CSS</h2>
      <div className={circleContainer}>
        <OrangeCircle />
        <OrangeCircle />
        <OrangeCircle />
      </div>
    </SkillRow>
    <SkillRow>
      <h2>ES6</h2>
      <div className={circleContainer}>
        <OrangeCircle />
        <OrangeCircle />
        <OrangeCircle />
        <OrangeCircle />
      </div>
    </SkillRow>
    <SkillRow>
      <h2>NodeJS</h2>
      <div className={circleContainer}>
        <OrangeCircle />
        <OrangeCircle />
      </div>
    </SkillRow>
  </SkillContainer>
);


export default SkillList;
// <SkillContainer>
//   <li>React/Redux</li>
//   <li>React Native</li>
//   <li>CSS3</li>
//   <li>NodeJS</li>
//   <li>ES6</li>
// </SkillContainer>
