import React from 'react';
import { css } from 'emotion';


const Hexagon = css({
  overflow: 'hidden',
  visibility: 'hidden',
  transform: 'rotate(120deg)',
  width: '400',
  height: 200,
  margin: '0 0 0 -80px',

});
const HexagonIn1 = css({
  overflow: 'hidden',
  width: '100%',
  height: '100%',
  transform: 'rotate(-60deg)',
});
const HexagonIn2 = css({
  width: '100%',
  height: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50%',
  backgroundImage: 'url(http://placekitten.com/240/240)',
  visibility: 'visible',
  border: '8px solid grey',
  transform: 'rotate(-60deg)',
});

const AboutImage = () => (
  <div className={Hexagon}>
    <div className={HexagonIn1}>
      <div className={HexagonIn2} />
    </div>
  </div>
);

export default AboutImage;
