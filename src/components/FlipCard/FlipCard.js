import React from 'react';
import './FlipCard.css';


const FlipCard = ({project}) => {
        return ( 
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={project.image} alt="Avatar" />
                    <div className='title'>
                        <h5>{project.title}</h5>
                    </div>
                    <p>{project.techStack}</p>
                </div>
                <div className="flip-card-back">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    {/* eslint-disable-next-line */}
                    <a href="#" target='_blank'>Demo</a>
                </div>
            </div>
        </div>
        );
    }
 
export default FlipCard