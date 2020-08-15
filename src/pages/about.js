import React from 'react';
import Portrait from '../assets/Images/Hampton.jpg';

function About() {
    return(
        <div className='body-container'>
            <div className="container-fluid">
							<div className="row">
								<div className="col-8">
									<h1 className="slide">
											About:
									</h1>
									<p className='fade-in'>
											I am a self taught Developer, with a primary skillset in Full Stack Web Development and a true techie at heart. 
											I have built several sites from strictly front end with Angular or React to Full-Stack sites with a Mongo and Node Backend.
											I absolutely love what I do and I welcome the challenge that comes along with learning new skills. 
											I am always looking to expand my knowledge and take on a new obstacle. 
									</p>
								</div>
            		<div className="col-4 fade-in">
									<img className='portrait' src={Portrait} alt="man smiling"/>
								</div>
							</div>
            </div>
        </div>
    )
}

export default About;