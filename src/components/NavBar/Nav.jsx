import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  const { pathname } = useLocation();

  const links = [
    // {
    //   path: '/',
    //   className: 'nav-item nav-link',
    //   icon: (
    //     <svg
    //       width="34.5"
    //       height="30"
    //       viewBox="0 0 59 52"
    //       id="logo"
    //       fill="none"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path
    //         d="M13.9964 1V1.17182M13.9964 1.17182V37.6924L1 50.7477V1.17182H13.9964ZM16.6612 37.9416L3.56507 51H23.3426L36.569 37.6924V26.6014H23.5726V37.9416H16.6612ZM39.1341 37.9416L26.1377 51H53.8405L58.4576 46.3608V1.17182H45.4613V37.9416H39.1341ZM36.569 4.2646V15.2612H23.5726V4.2646H36.569Z"
    //         stroke="#0cdbff"
    //       />
    //     </svg>
    //   ),
    // },
    {
      path: '/',
      className: 'nav-item nav-link',
      icon: (
        <FontAwesomeIcon
          // className="nav-item"
          icon="home"
          size="lg"
        />
      ),
      children: <b>Home</b>,
    },
    {
      path: '/projects',
      className: 'nav-item nav-link',
      icon: (
        <FontAwesomeIcon
          // className="nav-item"
          icon="tasks"
          size="lg"
        />
      ),
      children: <b>Projects</b>,
    },
    {
      path: '/skills',
      className: 'nav-item nav-link',
      icon: (
        <FontAwesomeIcon
          // className="nav-item"
          icon="toolbox"
          size="lg"
        />
      ),
      children: <b>Skills</b>,
    },
    {
      path: '/about',
      className: 'nav-item nav-link',
      icon: (
        <FontAwesomeIcon
          // className="nav-item"
          icon="user"
          size="lg"
        />
      ),
      children: <b>About</b>,
    },
  ];

  const getLinks = () => {
    return links.map((link, index) => (
      <li className="nav-item">
        <Link
          key={link.path + index}
          to={link.path}
          className={`nav-link ${
            link.path === pathname ? 'active' : ''
          }`}
        >
          {link.icon}
        </Link>
      </li>
    ));
  };

  return (
    // <nav id="primary-nav">
    <nav>
      {/* <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button> */}
      <div
        className="hamburger"
        onClick={() => setNavOpen(!navOpen)}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      {/* <div
        className="collapse navbar-collapse"
        id="navbarNav"
      > */}
      <ul
        className={`navbar-links ${navOpen ? 'open' : ''}`}
      >
        {getLinks()}
      </ul>
      {/* </div> */}
    </nav>
  );
};

export { Nav };

/* <Link to='/contact' className='nav-item nav-link' onMouseOut={checkRoute}>
              <FontAwesomeIcon 
                className='nav-item'
                icon='paper-plane' 
                size="lg"/> 
                <b>Contact</b>
        </Link> */

/* <nav id="secondary-nav" className="pt-3">
        <ul className="nav flex-row nav-fill">
          {getLinks()}
          <Link to='/contact' className='iconSwitch' onMouseOut={checkRoute}>
								<FontAwesomeIcon 
									className='nav-item'
									icon='paper-plane' 
									size="lg"/> 
									<b>Contact</b>
					</Link>
        </ul>
      </nav> */
