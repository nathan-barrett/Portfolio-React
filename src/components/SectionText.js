import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Section = styled('div')({
  display: 'flex',
  alignSelf: 'flex-start',
  h2: {
    color: '#ff4500',
    fontFamily: '"Raleway", sans-serif',
    marginBottom: 2,
    marginTop: 2,
    fontSize: '2em',
  },
});

const SectionText = props => (
  <Section>
    <h2>{props.text}</h2>
  </Section>
);

SectionText.propTypes = {
  text: PropTypes.string,
};

export default SectionText;
