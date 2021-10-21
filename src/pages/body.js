import React from 'react';
import Text from '../components/Text';
import { Social } from '../components/Social';
import { AnimatedLogo } from '../components/AnimatedLogo';

const Body = () => {
  return (
    <div className="landing-page">
      <div className="main">
        <Text>Hello, I'm Wes, a Web Developer.</Text>
        <AnimatedLogo />
      </div>
      <div className="social">
        <Social />
      </div>
    </div>
  );
};

export { Body };
