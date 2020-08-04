import React from 'react';
import ProjectData from '../../store/ProjectData';
import './FlipCard.css'

function FlipCard () {

        return ( 
            // <div className="container">
                <div className="row justify-content-center">
                    {ProjectData.map((project, _id) => (
                        <div className="flip-card">
                                <div key={project._id}>
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img src={project.image} alt="Avatar" />
                                            <div className='title'>
                                                <h5>{project.techStack}</h5>
                                            </div>
                                        </div>
                                        <div className="flip-card-back">
                                            <h1>{project.title}</h1>
                                            <p>Architect & Engineer</p>
                                            <p>We love that guy</p>
                                            <a href='http://google.com'>Click Me</a>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    ))}
                </div>
        // </div>
        );
    }
 
export default FlipCard;