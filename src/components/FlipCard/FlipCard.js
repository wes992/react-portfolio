import React, { Component } from 'react';
// import ProjectData from '../../store/ProjectData';
import './FlipCard.css'

class FlipCard extends Component {
    state = { 
        projects: [
            {
                _id: '1',
                title: 'YelpCamp',
                image: "http://via.placeholder.com/200x125",
                techStack: 'Mongo, Express, Node'
            },
            {
                _id: '2',
                title: 'RentWithMe',
                image: "http://via.placeholder.com/200x125",
                techStack: 'Mongo, Express, Angular, Node'
            },
            {
                _id: '3',
                title: 'YelpCamp',
                image: "http://via.placeholder.com/200x125",
                techStack: 'Mongo, Express, React, Node'
            }
        ]
     }

     
    render() { 
        return ( 
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src="http://via.placeholder.com/200x125" alt="Avatar" />
                </div>
                <div className="flip-card-back">
                    <h1>John Doe</h1>
                    <p>Architect & Engineer</p>
                    <p>We love that guy</p>
                    <a href='http://google.com'>Click Me</a>
                </div>
            </div>
        </div>
        );
    }
}
 
export default FlipCard;