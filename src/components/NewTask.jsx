import { useEffect, useState } from 'react';

const NewTask = ({ status, projects, setProjects }) => {
  const [project, setProject] = useState({
    title: '',
    description: '',
    status: status,
  });

  //add the project to projects array
  const addProject = (e) => {
    e.preventDefault();
    setProjects([...projects, project]);
    setProject({
      title: '',
      description: '',
      status: status,
    });
    console.log(projects);
  };

  return (
    <>
      <div>
        <h4>New Task</h4>
        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              placeholder="Enter title"
              value={project.title}
              onChange={(e) =>
                setProject({ ...project, title: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              rows="3"
              placeholder="Enter description"
              value={project.description}
              onChange={(e) =>
                setProject({ ...project, description: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <input
              type="text"
              readOnly
              className="form-control"
              id="status"
              value={project.status}
            />
          </div>
          <button type="submit" onClick={() => addProject()}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default NewTask;
