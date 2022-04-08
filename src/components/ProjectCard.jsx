import React from 'react';

const ProjectCard = () => {
  return (
    <div className="card">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        Add icons to the buttons
        <br />
        Fetch the card details from localStorage
        <br />
        The cards should be mapped
        <br />
        Cards will have these fields: 1. Title 2. Status 3. Description 4. Due
        date
      </p>
      <div>
        <button>Started</button>
        <button>Completed</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default ProjectCard;
