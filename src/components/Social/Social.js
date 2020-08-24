import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Social.scss';

class Social extends Component {
  state = {};
  render() {
    return (
      <span className="social">
        Social Links:
        <span>
          <a
            href="https://www.linkedin.com/in/wes992/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={['fab', 'linkedin']}
              size="lg"
            />
            <b>Home</b>
          </a>
        </span>
        <span>
          <a
            href="https://github.com/wes992"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={['fab', 'github']}
              size="lg"
            />
            <b>Home</b>
          </a>
        </span>
        <span>
          <a
            href="https://stackoverflow.com/users/13972274/wes-hampton"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={['fab', 'stack-overflow']}
              size="lg"
            />
            <b>Home</b>
          </a>
        </span>
        <span>
          <a
            href="https://www.facebook.com/wes.hampton.9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={['fab', 'facebook']}
              size="lg"
            />
            <b>Home</b>
          </a>
        </span>
      </span>
    );
  }
}

export default Social;
