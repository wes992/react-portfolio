/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Left() {
  return (
    <div className="left-section">
      <nav className='justify-content-center'>
        <span className='nav-links'>
            <a href='/'className='iconSwitch'>
                <FontAwesomeIcon icon='home' size="lg"/> {/* Home */}
            </a>
            <a href='/about' className='iconSwitch'>
                <FontAwesomeIcon icon='user' size="lg"/> {/* About */}
            </a>
            <a href='/skills' className='iconSwitch'>
                <FontAwesomeIcon icon='toolbox' size="lg"/> {/* Skills */}
            </a>
            <a href='/projects' className='iconSwitch'>
                <FontAwesomeIcon icon='tasks' size="lg"/> {/* Projects */}
            </a>
            <a href='/contact' className='iconSwitch'>
                <FontAwesomeIcon icon='paper-plane' size="lg"/> {/* Contact */}
            </a>
        </span>
      </nav>
    </div>
  );
}

export default Left
