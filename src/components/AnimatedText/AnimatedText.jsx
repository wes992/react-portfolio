import React from 'react';
import {
  Transition,
  TransitionGroup,
} from 'react-transition-group';
import Character from '../Character';

const handleCharacter = (state, letter) => {
  console.log(`state for ${letter}`, state);
  return <Character state={state}>{letter}</Character>;
};
const AnimatedText = ({ children }) =>
  children.split('').map((letter, key) => (
    <Transition
      in
      key={key}
      timeout={key * 50}
      unmountOnExit
    >
      {() => (
        <TransitionGroup appear={true} component={null}>
          <Transition
            timeout={key * 80}
            key={letter.concat(key)}
          >
            {(state) => handleCharacter(state, letter)}
          </Transition>
        </TransitionGroup>
      )}
    </Transition>
  ));

export { AnimatedText };
