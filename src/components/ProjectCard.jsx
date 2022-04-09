import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="card">
      <h5 className="card-title">{project.title}</h5>
      <p className="card-text">{project.description}</p>
      <div>
        <button>Started</button>
        <button>Completed</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default ProjectCard;
