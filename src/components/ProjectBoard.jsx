import { useState } from 'react';
import NewTask from './NewTask';
import ProjectCard from './ProjectCard';

const ProjectBoard = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState(false);
  const [project, setProject] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleNewProject = () => {
    setNewProject(true);
  };

  const handleClose = () => {
    setNewProject(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(false);
    const data = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value,
    };
    //add the data to localstorage
    setProjects([...projects, data]);
    setIsLoading(false);
    setNewProject(false);
    setProject({});
    e.target.reset();
  };

  const handleEdit = (project) => {
    setProject(project);
    setNewProject(true);
  };

  const handleDelete = (id) => {
    const newProjects = projects.filter((project) => project.id !== id);
    setProjects(newProjects);
  };

  console.log(localStorage.getItem('projects'));
  return (
    <div className="project-board">
      <div className="column">
        <h2>Not started</h2>
        <div className="card-stack">
          <ProjectCard />
          <button>Add new</button>
        </div>
      </div>
      <div className="column">
        <h2>In progress</h2>
        <div className="card-stack">
          <ProjectCard />
          <button>Add new</button>
        </div>
      </div>
      <div className="column">
        <h2>Completed</h2>
        <div className="card-stack">
          <ProjectCard />
          <ProjectCard />
          <button newProject>Add new</button>
          <NewTask handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default ProjectBoard;
