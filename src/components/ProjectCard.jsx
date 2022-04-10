import React, { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [edit, setEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(project.title);
  const [newStatus, setNewStatus] = useState(project.status);
  const [newDescription, setNewDescription] = useState(project.description);

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleChange = (e) => {
    if (e.target.name === 'title') {
      setNewTitle(e.target.value);
    } else if (e.target.name === 'status') {
      setNewStatus(e.target.value);
    } else if (e.target.name === 'description') {
      setNewDescription(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEdit(!edit);
    //updates the project details in the projects array
    project.title = newTitle;
    project.status = newStatus;
    project.description = newDescription;
  };

  return (
    <>
      {!edit && (
        <div className="card">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text">{project.description}</p>
          <div>
            <button onClick={handleEdit}>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      )}
      {edit && (
        <form className="edit-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Title</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="title"
              value={newTitle}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={newDescription}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              className="form-control"
              id="status"
              name="status"
              value={newStatus}
              onChange={handleChange}
            >
              <option value="not started">Not started</option>
              <option value="in progress">In progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
};

export default ProjectCard;
