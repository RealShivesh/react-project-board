import { useState } from 'react';
import NewTask from './NewTask';
import ProjectCard from './ProjectCard';

const ProjectBoard = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    notStarted: false,
    inProgress: false,
    completed: false,
  });
  const [project, setProject] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  console.log(localStorage.getItem('projects'));
  if (localStorage.getItem('projects')) {
    setProjects(JSON.parse(localStorage.getItem('projects')));
  }
  return (
    <div className="project-board">
      <div className="column">
        <h2>Not started</h2>
        <div className="card-stack">
          <ProjectCard />
          <button
            onClick={() =>
              setNewProject({
                ...newProject,
                notStarted: !newProject.notStarted,
              })
            }
          >
            Add new
          </button>
          {newProject.notStarted && (
            <NewTask
              projects={projects}
              setProjects={setProjects}
              status="not started"
            />
          )}
        </div>
      </div>
      <div className="column">
        <h2>In progress</h2>
        <div className="card-stack">
          <ProjectCard />
          <button
            onClick={() =>
              setNewProject({
                ...newProject,
                inProgress: !newProject.inProgress,
              })
            }
          >
            Add new
          </button>
          {newProject.inProgress && (
            <NewTask
              projects={projects}
              setProjects={setProjects}
              status="in progress"
            />
          )}
        </div>
      </div>
      <div className="column">
        <h2>Completed</h2>
        <div className="card-stack">
          <ProjectCard />
          <ProjectCard />
          <button
            onClick={() =>
              setNewProject({
                ...newProject,
                completed: !newProject.completed,
              })
            }
          >
            Add new
          </button>
          {newProject.completed && (
            <NewTask
              projects={projects}
              setProjects={setProjects}
              status="completed"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectBoard;
