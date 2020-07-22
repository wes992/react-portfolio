/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Left() {
  return (
    <div className="left-section">
      <nav className='justify-content-center'>
        <span className='nav-links'>
            <a className='iconSwitch'>
                {/* <i className="fas fa-home"></i>Home */}
                <FontAwesomeIcon icon='home' size="lg" className='active'/> {/* Home */}
            </a>
        </span>
        <span>
            <a className='iconSwitch'>
                {/* <i className="fas fa-home"></i>Home */}
                <FontAwesomeIcon icon='user' size="lg"/> {/* About */}
            </a>
        </span>
        <span>
            <a className='iconSwitch'>
                {/* <i className="fas fa-home"></i>Home */}
                <FontAwesomeIcon icon='toolbox' size="lg"/> {/* Skills */}
            </a>
        </span>
        <span>
            <a className='iconSwitch'>
                {/* <i className="fas fa-home"></i>Home */}
                <FontAwesomeIcon icon='tasks' size="lg"/> {/* Projects */}
            </a>
        </span>
        <span>
            <a className='iconSwitch'>
                {/* <i className="fas fa-home"></i>Home */}
                <FontAwesomeIcon icon='paper-plane' size="lg"/> {/* Contact */}
            </a>
        </span>
      </nav>
    </div>
  );
}

export default Left;
