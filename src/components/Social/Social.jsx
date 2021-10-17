import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Social = () => {
  const links = [
    {
      name: 'Linked In',
      url: 'https://www.linkedin.com/in/wes992/',
      icon: ['fab', 'linkedin'],
      iconSize: 'lg',
      target: '_blank',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/wes992',
      icon: ['fab', 'github'],
      iconSize: 'lg',
      target: '_blank',
    },
    {
      name: 'Stack Overflow',
      url: 'https://stackoverflow.com/users/13972274/wes-hampton',
      icon: ['fab', 'stack-overflow'],
      iconSize: 'lg',
      target: '_blank',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/wes.hampton.9',
      icon: ['fab', 'facebook'],
      iconSize: 'lg',
      target: '_blank',
    },
  ];

  return (
    <div className="social-container">
      <div className="-left">Social Links:</div>
      <div className="-right">
        {links.map((link, index) => (
          <li key={link.name + index}>
            <a
              className="link"
              href={link.url}
              target={link.target}
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={link.icon}
                size={link.iconSize}
              />
              <b>{link.name}</b>
            </a>
          </li>
        ))}
      </div>
      {/* <span>
        <a
          href="https://www.facebook.com/wes.hampton.9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={['fab', 'facebook']}
            size="lg"
          />
          <b>Facebook</b>
        </a>
      </span> */}
    </div>
  );
};

export { Social };
