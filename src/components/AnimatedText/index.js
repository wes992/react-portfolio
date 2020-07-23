import React from 'react';
import PropTypes from 'prop-types';
import {
  Transition,
  TransitionGroup,
} from 'react-transition-group';
import Character from '../Character';

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
            timeout={key * 125}
            key={letter.concat(key)}
          >
            {state => (
              <Character state={state}>{letter}</Character>
            )}
          </Transition>
        </TransitionGroup>
      )}
    </Transition>
  ));

AnimatedText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AnimatedText;
