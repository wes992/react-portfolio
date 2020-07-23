/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Left() {
  return (
    <div className="left-section">
      <nav className='justify-content-center'>
        <span className='nav-links'>
            <a href='/'className='iconSwitch'>
                {/* <i className="fas fa-home"></i>Home */}
                <FontAwesomeIcon icon='home' size="lg"/> {/* Home */}
            </a>
        </span>
        <span>
            <a href='/about' className='iconSwitch'>
                {/* <i className="fas fa-home"></i>Home */}
                <FontAwesomeIcon icon='user' size="lg"/> {/* About */}
            </a>
        </span>
        <span>
            <a href='/skills' className='iconSwitch'>
                {/* <i className="fas fa-home"></i>Home */}
                <FontAwesomeIcon icon='toolbox' size="lg"/> {/* Skills */}
            </a>
        </span>
        <span>
            <a href='/projects' className='iconSwitch'>
                {/* <i className="fas fa-home"></i>Home */}
                <FontAwesomeIcon icon='tasks' size="lg"/> {/* Projects */}
            </a>
        </span>
        <span>
            <a href='/contact' className='iconSwitch'>
                {/* <i className="fas fa-home"></i>Home */}
                <FontAwesomeIcon icon='paper-plane' size="lg"/> {/* Contact */}
            </a>
        </span>
      </nav>
    </div>
  );
}

export default Left;
