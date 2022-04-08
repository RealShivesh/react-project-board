import ProjectCard from './ProjectCard';

const ProjectBoard = () => {
  console.log(localStorage.getItem('tasks'));
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
          <button>Add new</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectBoard;
