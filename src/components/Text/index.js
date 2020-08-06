import React from 'react';
import PropTypes from 'prop-types';
import AnimatedText from '../AnimatedText';
import Container from '../Container';

const Text = ({ children }) => (
  <Container>
    <AnimatedText>{children}</AnimatedText>
    {/* <h5 className= 'delay2 fade-in' style={{opacity: 0}}>Full-stack | Jr. Dev | Self-taught </h5> */}
  </Container>
);

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Text;
