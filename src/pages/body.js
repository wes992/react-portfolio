import React from 'react';
import Text from '../components/Text';
import { Social } from '../components/Social';
import { AnimatedLogo } from '../components/AnimatedLogo';

const Body = () => {
  return (
    <>
      <div className="landingPage">
        <Text>Hello, I'm Wes, a Web Developer.</Text>
        <AnimatedLogo />
      </div>
      <Social />
    </>
  );
};

export { Body };
