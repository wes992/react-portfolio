import React from 'react';
import PropTypes from 'prop-types';
import AnimatedText from '../AnimatedText';
import Container from '../Container';

const Text = ({ children }) => (
  <Container>
    <AnimatedText>{children}</AnimatedText>
  </Container>
);

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Text;
