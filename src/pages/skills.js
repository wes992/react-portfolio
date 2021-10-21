import React from 'react';
import { Cube } from '../components/Cube/Cube';
import { SkillsCard } from '../components/SkillsCard';

const Skills = () => {
  return (
    <>
      <h3>Some of my skills:</h3>
      <div className="row fade-in">
        <SkillsCard />
        <div className="wrapper">
          <Cube />
        </div>
      </div>
    </>
  );
};

export { Skills };
