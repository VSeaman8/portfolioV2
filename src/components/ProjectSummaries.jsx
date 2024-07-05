import "./ProjectSummaries.css";
import example from "../assets/images/jigar-panchal-8BAyCFRCHqY-unsplash.jpg";

const ProjectSummaries = () => {
  return (
    <div className="projectSummaries">
      <div className="project">
        <h3>STACK</h3>
        <h2>Title</h2>
        <div className="stackList">
          <ol></ol>
        </div>
        <p className="summary">Summary here</p>
        <img src={example} alt="website screenshot" />
        <button>View Project</button>
      </div>
    </div>
  );
};
export default ProjectSummaries;
