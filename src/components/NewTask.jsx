import { useState } from 'react';

const NewTask = ({ status, projects, setProjects }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const inputTitleHandler = (e) => {
    setTitle(e.target.value);
    //console.log(title);
  };

  const inputDescriptionHandler = (e) => {
    setDescription(e.target.value);
    //console.log(description);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setProjects([
      ...projects,
      { title, description, status, id: Math.random() },
    ]); //add the new task to the projects array
    setTitle('');
    setDescription('');
  };
  localStorage.setItem('projects', JSON.stringify(projects));
  //console.log(projects);

  return (
    <>
      <div className="new-task">
        <h4>New Task</h4>
        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              placeholder="Enter title"
              value={title}
              onChange={inputTitleHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              rows="3"
              placeholder="Enter description"
              value={description}
              onChange={inputDescriptionHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <input
              type="text"
              readOnly
              className="form-control"
              id="status"
              value={status}
            />
          </div>
          <button type="submit" onClick={submitHandler}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default NewTask;
