import ProjectCard from './ProjectCard';

const ProjectBoard = () => {
  return (
    <div>
      <div>
        <div>
          <h2>Not started</h2>
          <div>
            <ProjectCard />
          </div>
        </div>
        <div>
          <h2>In progress</h2>
        </div>
        <div>
          <h2>Completed</h2>
        </div>
      </div>
    </div>
  );
};

export default ProjectBoard;
