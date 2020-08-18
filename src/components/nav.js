/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import logo from '../logo.svg';

	
	class Nav extends Component {
	
	render() { 
		return ( 
			<div>
			<nav id="primary-nav">
				<ul className="nav">
					<Link to='/' className="iconSwitch">
        				{/* <img src={logo} id="logo" alt="logo" /> */}
						<svg width="34.5" height="30" viewBox="0 0 59 52" id='logo' fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M13.9964 1V1.17182M13.9964 1.17182V37.6924L1 50.7477V1.17182H13.9964ZM16.6612 37.9416L3.56507 51H23.3426L36.569 37.6924V26.6014H23.5726V37.9416H16.6612ZM39.1341 37.9416L26.1377 51H53.8405L58.4576 46.3608V1.17182H45.4613V37.9416H39.1341ZM36.569 4.2646V15.2612H23.5726V4.2646H36.569Z" stroke="#0cdbff"/>
						</svg>						
					</Link>
					<Link to='/' className='iconSwitch'>
								<FontAwesomeIcon
									className='nav-item'
									icon='home' 
									size="lg"/>
									<b>Home</b>
					</Link>
					<Link to='/about' className='iconSwitch'>
								<FontAwesomeIcon
									className='nav-item'
									icon='user' 
									size="lg"/> 
									<b>About</b>
					</Link>  
					<Link to='/skills' className='iconSwitch'>
								<FontAwesomeIcon 
									className='nav-item'
									icon='toolbox' 
									size="lg"/> 
									<b>Skills</b>
					</Link>
					<Link to='/projects' className='iconSwitch'>
								<FontAwesomeIcon 
									className='nav-item'
									icon='tasks' 
									size="lg"/> 
									<b>Projects</b>
					</Link>
					<Link to='/contact' className='iconSwitch'>
								<FontAwesomeIcon 
									className='nav-item'
									icon='paper-plane' 
									size="lg"/> 
									<b>Contact</b>
					</Link>
				</ul>
			</nav>
		
			<nav id="secondary-nav" className='pt-3'>
					<ul className="nav flex-row nav-fill">
					<Link to='/' className="iconSwitch">
        				{/* <img src={logo} id="logo" alt="logo" /> */}
						<svg width="34.5" height="30" viewBox="0 0 59 52" id='logo' fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M13.9964 1V1.17182M13.9964 1.17182V37.6924L1 50.7477V1.17182H13.9964ZM16.6612 37.9416L3.56507 51H23.3426L36.569 37.6924V26.6014H23.5726V37.9416H16.6612ZM39.1341 37.9416L26.1377 51H53.8405L58.4576 46.3608V1.17182H45.4613V37.9416H39.1341ZM36.569 4.2646V15.2612H23.5726V4.2646H36.569Z" stroke="#0cdbff"/>
						</svg>						
					</Link>
					<Link to='/' className='iconSwitch'>
								<FontAwesomeIcon
									className='nav-item'
									icon='home' 
									size="lg"/>
									<b>Home</b>
					</Link>
					<Link to='/about' className='iconSwitch'>
								<FontAwesomeIcon 
									className='nav-item'
									icon='user' 
									size="lg"/> 
									<b>About</b>
					</Link>  
					<Link to='/skills' className='iconSwitch'>
								<FontAwesomeIcon 
									className='nav-item'
									icon='toolbox' 
									size="lg"/> 
									<b>Skills</b>
					</Link>
					<Link to='/projects' className='iconSwitch'>
								<FontAwesomeIcon 
									className='nav-item'
									icon='tasks' 
									size="lg"/> 
									<b>Projects</b>
					</Link>
					<Link to='/contact' className='iconSwitch'>
								<FontAwesomeIcon 
									className='nav-item'
									icon='paper-plane' 
									size="lg"/> 
									<b>Contact</b>
					</Link>
					</ul>
			</nav>
		</div>

);
}
}

export default Nav
