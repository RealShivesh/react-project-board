import React from 'react';

const ProjectCard = () => {
  return (
    <div className="card">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Add icons to the buttons</p>
      <div>
        <button>Started</button>
        <button>Completed</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default ProjectCard;
