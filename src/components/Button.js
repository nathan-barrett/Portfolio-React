import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const buttonStyle = css({
  boxShadow: '0 0 0 0 rgba(34,36,38,.15) inset',
  backgroundColor: '#ff4500',
  color: '#FFF',
  fontSize: '1rem',
  cursor: 'pointer',
  minHeight: '1em',
  outline: 0,
  border: 'none',
  verticalAlign: 'baseline',
  margin: ' 0 .25em 0 0',
  padding: '.78571429em 1.5em',
  fontWeight: '700',
  lineHeight: '1em',
  fontStyle: 'normal',
  textAlign: 'center',
  textDecoration: 'none',
  borderRadius: '.28571429rem',
  '@media (min-width: 500px)': {
    height: 60,
    width: 220,
    fontSize: '1.5rem',
  },
});
const MyButton = props => (
  <a href={props.link} target="_blank" rel="noopener noreferrer">
    <button className={buttonStyle}>{props.text}</button>
  </a>
);

MyButton.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
};

export default MyButton;
