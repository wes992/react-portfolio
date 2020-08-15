import React, { Component } from 'react';
import SkillData from '../../store/skillData';
import './SkillsCard.css';

class SkillsCard extends Component {
    state = { }

    renderSkills = () => 
    SkillData.map((skill, _id) => 
        <div key={_id} className="skillCard col-sm-3 m-2">
            <div className="top">
                {/* ***line in question*** */}
                <h5>{skill.title}</h5>
                <div className="icon">
                    <img src={skill.icon} alt={skill.altDesc}/>
                </div>
            </div>
            <div className="bottom">
                    {skill.techs.map((tech,index)=>(
                    <div className='skillCardList' key={index}> {tech}</div>
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