import { useEffect, useState } from 'react';
import NewTask from './NewTask';
import ProjectCard from './ProjectCard';

const ProjectBoard = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    notStarted: false,
    inProgress: false,
    completed: false,
  });

  useEffect(() => {
    getLocalProjects();
  }, []);

  const getLocalProjects = () => {
    if (localStorage.getItem('projects') === null) {
      localStorage.setItem('projects', JSON.stringify(projects));
    } else {
      setProjects(JSON.parse(localStorage.getItem('projects')));
    }
  };

  return (
    <div className="project-board">
      <div className="column">
        <h2>Not started</h2>
        <div className="card-stack">
          {projects.map((project) => {
            if (project.status === 'not started') {
              return <ProjectCard key={project.id} project={project} />;
            }
            return null;
          })}
          <button
            className="new-project-button"
            onClick={() =>
              setNewProject({
                ...newProject,
                notStarted: !newProject.notStarted,
              })
            }
          >
            Add new task
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
          {projects.map((project) => {
            if (project.status === 'in progress') {
              return <ProjectCard key={project.id} project={project} />;
            }
            return null;
          })}
          <button
            className="new-project-button"
            onClick={() =>
              setNewProject({
                ...newProject,
                inProgress: !newProject.inProgress,
              })
            }
          >
            Add new task
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
          {projects.map((project) => {
            if (project.status === 'completed') {
              return <ProjectCard key={project.id} project={project} />;
            }
            return null;
          })}
          <button
            className="new-project-button"
            onClick={() =>
              setNewProject({
                ...newProject,
                completed: !newProject.completed,
              })
            }
          >
            Add new task
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
