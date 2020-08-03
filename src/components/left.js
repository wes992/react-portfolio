/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Left() {
  return (
    <div className="left-section">
      <nav className='justify-content-center'>
        <span className='nav-links'>
            <Link to='/' classname='llink'>
              <h3 className='logo iconSwitch'>W</h3>
            </Link>
            <Link to='/' className='iconSwitch'>
                <FontAwesomeIcon icon='home' size="lg"/> {/* Home */}
            </Link>
            <Link to='/about' className='iconSwitch'>
                <FontAwesomeIcon icon='user' size="lg"/> {/* About */}
            </Link>
            <Link to='/skills' className='iconSwitch'>
                <FontAwesomeIcon icon='toolbox' size="lg"/> {/* Skills */}
            </Link>
            <Link to='/projects' className='iconSwitch'>
                <FontAwesomeIcon icon='tasks' size="lg"/> {/* Projects */}
            </Link>
            <Link to='/contact' className='iconSwitch'>
                <FontAwesomeIcon icon='paper-plane' size="lg"/> {/* Contact */}
            </Link>
        </span>
      </nav>
    </div>
  );
}

export default Left
