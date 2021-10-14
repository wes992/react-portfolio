import React from 'react';
import Cube from '../components/Cube/Cube';
import { SkillsCard } from '../components/SkillsCard';

const Skills = () => {
  return (
    <div className="body-container container-fluid">
      <div className="row">
        <div className="col-6">
          <h1>Some of my skills:</h1>
          <div className="row fade-in">
            <SkillsCard />
          </div>
        </div>
        <div className="wrapper col-6 align-items-top">
          <Cube />
        </div>
      </div>
    </div>
  );
};

export { Skills };
