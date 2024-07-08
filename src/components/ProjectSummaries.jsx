import "./ProjectSummaries.css";
import example from "../assets/images/jigar-panchal-8BAyCFRCHqY-unsplash.jpg";

const ProjectSummaries = () => {
  return (
    <div className="projectSummaries">
      <div className="project">
        <h3>STACK</h3>
        <h2>Travel Website</h2>
        <div className="stackList techskills">
          <ol>
            <li>React</li>
            <li>extress</li>
          </ol>
        </div>
        <p className="summary">
          Summary here. this is a longer format to check the fraction setting on
          my css. I am hoping that this will work he how
          alkfhjda;lkfhadkl;fhad;flkasdfsaruihyweproieha
        </p>
        <img src={example} alt="website screenshot" />
        <button>View Project</button>
      </div>
    </div>
  );
};
export default ProjectSummaries;
