import React, { Component } from 'react';

import SkillData from '../../store/skillData';
import './SkillsCard.css';

class SkillsCard extends Component {
    state = { }

    renderSkills = () => 
    SkillData.map((skill, _id) => 
        <div key={_id} className="skillCard col-sm-3 m-2">
            <div className="top">
                <div className="icon">{skill.icon}</div>
                <h5>{skill.title}</h5>
            </div>
            <div className="bottom">
                    {skill.techs.map((tech,index)=>(
                    <span className='skillCardList' key={index}> {tech} </span>
                    ))}
            </div>
        </div>
    );

    render() { 
    
        return ( 
            this.renderSkills()
         );
    }
}
 
export default SkillsCard;