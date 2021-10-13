import React from 'react';
import PropTypes from 'prop-types';
import { AnimatedText } from '../AnimatedText';

const Text = ({ children }) => (
  <div className="animated-container">
    <AnimatedText>{children}</AnimatedText>
    <h5 className="fade-in">
      Full-stack | Jr. Dev | Self-taught{' '}
    </h5>
  </div>
);

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Text;
