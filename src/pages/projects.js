import React, { useState } from 'react';
import FlipCard from '../components/FlipCard/FlipCard';
import { ProjectModal } from '../components/ProjectModal/ProjectModal';
import { projectData } from '../store';

const Projects = () => {
  const [showProjectModal, setShowProjectModal] =
    useState(false);
  const renderProjects = () =>
    projectData.map((project) => (
      <FlipCard
        key={project._id}
        project={project}
        setShowProjectModal={setShowProjectModal}
      />
    ));

  const selectedProject =
    projectData.find(
      (project) => project._id === showProjectModal
    ) || false;

  return (
    <>
      <div className="project-container">
        <h3>Some of my projects:</h3>
        <div className="row project-list fade-in">
          {renderProjects()}
        </div>
      </div>
      <ProjectModal
        {...selectedProject}
        show={showProjectModal}
        onClose={() => setShowProjectModal(false)}
      />
    </>
  );
};

export { Projects };
