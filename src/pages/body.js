import React from 'react';
import Text from '../components/Text';
import { Social } from '../components/Social';
import { AnimatedLogo } from '../components/AnimatedLogo';

const Body = () => {
  return (
    <div>
      <Text>Hello, I'm Wes, a Web Developer.</Text>
      <Social />
      <AnimatedLogo />
    </div>
  );
};

export { Body };
