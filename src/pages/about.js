import React from 'react';
import Portrait from '../assets/Images/Hampton.jpg';

function About() {
    return(
        <div className='body-container'>
            <div className="container-fluid">
            <div className="container-fluid col-4 fade-in"><img className='portrait' src={Portrait} alt="photo of a man smiling"/></div>
            <h1 className="h1-animation slide col-12">
                About:
            </h1>
                <p className='fade-in col-12'>
                    I'm a super techie at heart. I am a self taught Developer, with a primary skillset in Full Stack Web Development. 
                    I have built several sites from strictly front end with Angular or React to Full-Stack sites with a Mongo and Node Backend.
                    I am always looking to expand my knowledge and take on a new challenge. 
                </p>
            </div>
        </div>
    )
}

export default About;