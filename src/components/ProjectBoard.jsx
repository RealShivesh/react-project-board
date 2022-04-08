import ProjectCard from './ProjectCard';

const ProjectBoard = () => {
  return (
    <div className="project-board">
      <div className="column">
        <h2>Not started</h2>
        <div className="card-stack">
          <ProjectCard />
        </div>
      </div>
      <div className="column">
        <h2>In progress</h2>
        <div className="card-stack">
          <ProjectCard />
        </div>
      </div>
      <div className="column">
        <h2>Completed</h2>
        <div className="card-stack">
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default ProjectBoard;
