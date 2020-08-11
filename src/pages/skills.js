import React from 'react';
import Cube from '../components/Cube';
import SkillsCard from '../components/SkillsCard/SkillsCard';

const Skills = () => {
    return(
        <div className='body-container container-fluid'>
					<div className="row">
						<div className="col-6">
							<h1 className="slide">
									skills page
							</h1>
							<div className="row">
								<SkillsCard/>
								{/* <SkillsCard/> */}
								{/* <SkillsCard/> */}
							</div>
						</div>
            <div className="wrapper col-6">
							<Cube/>
						</div>
					</div>
        </div>
    )
}

export default Skills;