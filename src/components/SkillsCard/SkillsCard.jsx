import React from 'react';
import { skillData } from '../../store';
import './SkillsCard.scss';

const SkillsCard = () => {
  return skillData.map((skill, _id) => (
    <div key={_id} className="skillCard col-sm-3 m-2">
      <div className="top">
        {/* ***line in question*** */}
        <h5>{skill.title}</h5>
        <div className="icon">
          <img src={skill.icon} alt={skill.altDesc} />
        </div>
      </div>
      <div className="bottom">
        {skill.techs.map((tech, index) => (
          <div className="skillCardList" key={index}>
            {tech}
          </div>
        ))}
      </div>
    </div>
  ));
};

export { SkillsCard };
