/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Nav() {
  return (
    <div>
        <nav id="primary-nav" className='pt-3'>
          <ul class="nav flex-column justify-content-center ml-3">
            <li class="nav-item">
            <Link to='/'>
              <h3 className='iconSwitch' id='logo'>W</h3>
            </Link>
            </li>
            <li class="nav-item">
            <Link to='/' className='iconSwitch'>
                  <FontAwesomeIcon icon='home' size="lg"/> {/* Home */}
            </Link>
            </li>
            <li class="nav-item">
            <Link to='/about' className='iconSwitch'>
                  <FontAwesomeIcon icon='user' size="lg"/> {/* About */}
            </Link>  
            </li>
            <li class="nav-item">
            <Link to='/skills' className='iconSwitch'>
                  <FontAwesomeIcon icon='toolbox' size="lg"/> {/* Skills */}
            </Link>
            </li>
            <li class="nav-item">
            <Link to='/projects' className='iconSwitch'>
                  <FontAwesomeIcon icon='tasks' size="lg"/> {/* Projects */}
            </Link>
            </li>
            <li class="nav-item">
            <Link to='/contact' className='iconSwitch'>
                  <FontAwesomeIcon icon='paper-plane' size="lg"/> {/* Contact */}
            </Link>
            </li>
          </ul>
        </nav>
      
        <nav id="secondary-nav" className='pt-3'>
            <ul class="nav flex-row nav-fill">
            <li class="nav-item">
            <Link to='/'>
              <h3 className='iconSwitch' id='logo'>W</h3>
            </Link>
            </li>
            <li class="nav-item">
            <Link to='/' className='iconSwitch'>
                  <FontAwesomeIcon icon='home' size="lg"/> {/* Home */}
            </Link>
            </li>
            <li class="nav-item">
            <Link to='/about' className='iconSwitch'>
                  <FontAwesomeIcon icon='user' size="lg"/> {/* About */}
            </Link>  
            </li>
            <li class="nav-item">
            <Link to='/skills' className='iconSwitch'>
                  <FontAwesomeIcon icon='toolbox' size="lg"/> {/* Skills */}
            </Link>
            </li>
            <li class="nav-item">
            <Link to='/projects' className='iconSwitch'>
                  <FontAwesomeIcon icon='tasks' size="lg"/> {/* Projects */}
            </Link>
            </li>
            <li class="nav-item">
            <Link to='/contact' className='iconSwitch'>
                  <FontAwesomeIcon icon='paper-plane' size="lg"/> {/* Contact */}
            </Link>
            </li>
          </ul>
        </nav>
      </div>
  );
}

export default Nav
