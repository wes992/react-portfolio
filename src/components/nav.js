/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

	
	class Nav extends Component {
		
		state = { 
			isHovered: false
		}
	
	render() { 
		// console.log(this.state.isHovered)
		return ( 
			<div>
			<nav id="primary-nav" className='pt-3'>
				<ul className="nav flex-column justify-content-center pl-3">
					<Link to='/' className="iconSwitch nav-item">
						<h3 id='logo'>W</h3>
					</Link>
					<Link to='/' className='iconSwitch nav-item'>
								<FontAwesomeIcon
									icon='home' 
									size="lg"/>
									<b>Home</b>
					</Link>
					<Link to='/about' className='iconSwitch nav-item'>
								<FontAwesomeIcon 
									icon='user' 
									size="lg"/> 
									<b>About</b>
					</Link>  
					<Link to='/skills' className='iconSwitch nav-item'>
								<FontAwesomeIcon 
									icon='toolbox' 
									size="lg"/> 
									<b>Skills</b>
					</Link>
					<Link to='/projects' className='iconSwitch nav-item'>
								<FontAwesomeIcon 
									icon='tasks' 
									size="lg"/> 
									<b>Projects</b>
					</Link>
					<Link to='/contact' className='iconSwitch nav-item'>
								<FontAwesomeIcon 
									icon='paper-plane' 
									size="lg"/> 
									<b>Contact</b>
					</Link>
				</ul>
			</nav>
		
			<nav id="secondary-nav" className='pt-3'>
					<ul className="nav flex-row nav-fill">
					<Link to='/' className="iconSwitch nav-item">
						<h3 id='logo'>W</h3>
					</Link>
					<Link to='/' className='iconSwitch nav-item'>
								<FontAwesomeIcon
									icon='home' 
									size="lg"/>
									<b>Home</b>
					</Link>
					<Link to='/about' className='iconSwitch nav-item'>
								<FontAwesomeIcon 
									icon='user' 
									size="lg"/> 
									<b>About</b>
					</Link>  
					<Link to='/skills' className='iconSwitch nav-item'>
								<FontAwesomeIcon 
									icon='toolbox' 
									size="lg"/> 
									<b>Skills</b>
					</Link>
					<Link to='/projects' className='iconSwitch nav-item'>
								<FontAwesomeIcon 
									icon='tasks' 
									size="lg"/> 
									<b>Projects</b>
					</Link>
					<Link to='/contact' className='iconSwitch nav-item'>
								<FontAwesomeIcon 
									icon='paper-plane' 
									size="lg"/> 
									<b>Contact</b>
					</Link>
					</ul>
			</nav>
		</div>

);
// console.log(this.state.isHovered)
}
}

export default Nav
