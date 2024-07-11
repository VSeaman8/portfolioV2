import "./ProjectSummaries.css";
import example from "../assets/images/jigar-panchal-8BAyCFRCHqY-unsplash.jpg";

const ProjectSummaries = () => {
  return (
    <>
      {/* Project 1 */}
      <div className="projectSummaries">
        <div className="project">
          <h3>frontend</h3>
          <h2>Dungeons & Dragons Character Generator</h2>
          <div className="stackList techskills">
            <ol>
              <li>React</li>
              <li>CSS</li>
              <li>html</li>
            </ol>
          </div>
          <p className="summary">
            This is my current project where I am creating a simple frontend
            website intergrating a third party API to create a quick chartacter
            for the user. Involves strict management of data pulled from the API
            and randomised.
          </p>
          <img src={example} alt="website screenshot" />
          <button>View Project</button>
        </div>
        {/* Project 2 */}
      </div>
      <div className="projectSummaries">
        <div className="project">
          <h3>Full Stack</h3>
          <h2>Travel Info Website</h2>
          <div className="stackList techskills">
            <ol>
              <li>React</li>
              <li>Express</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>MongoDB</li>
            </ol>
          </div>
          <p className="summary">
            Developed a full stack travel information website as part of my
            final challenge at the Digital Futures Academy. The application
            integrates third-party APIs to provide a 5-day weather forecast for
            any searchable location, with functionality to save favorite
            locations locally. Additionally, the site includes a map of the
            local area.
          </p>
          <img src={example} alt="website screenshot" />
          <button>View Project</button>
        </div>
      </div>
      {/* Project 3 */}
      <div className="projectSummaries">
        <div className="project">
          <h3>Frontend</h3>
          <h2>Weather</h2>
          <div className="stackList techskills">
            <ol>
              <li>React</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ol>
          </div>
          <p className="summary">
            Summary here. this is a longer format to check the fraction setting
            on my css. I am hoping that this will work he how
            alkfhjda;lkfhadkl;fhad;flkasdfsaruihyweproieha
          </p>
          <img src={example} alt="website screenshot" />
          <button>View Project</button>
        </div>
      </div>
      {/* Project 4 */}
      <div className="projectSummaries">
        <div className="project">
          <h3>stack</h3>
          <h2>Dictionary</h2>
          <div className="stackList techskills">
            <ol>
              <li>React</li>
              <li>Express</li>
              <li>CSS</li>
              <li>html</li>
              <li>MongoDB</li>
            </ol>
          </div>
          <p className="summary"></p>
          <img src={example} alt="website screenshot" />
          <button>View Project</button>
        </div>
      </div>
      {/* Project 5 */}
      <div className="projectSummaries">
        <div className="project">
          <h3>stack</h3>
          <h2>title</h2>
          <div className="stackList techskills">
            <ol>
              <li>React</li>
              <li>Express</li>
              <li>CSS</li>
              <li>html</li>
              <li>MongoDB</li>
            </ol>
          </div>
          <p className="summary"></p>
          <img src={example} alt="website screenshot" />
          <button>View Project</button>
        </div>
      </div>
    </>
  );
};
export default ProjectSummaries;

/* template for each project
<div className="projectSummaries">
        <div className="project">
          <h3>stack</h3>
          <h2>title</h2>
          <div className="stackList techskills">
            <ol>
              <li>React</li>
              <li>Express</li>
              <li>CSS</li>
              <li>html</li>
              <li>MongoDB</li>
            </ol>
          </div>
          <p className="summary">
            
          </p>
          <img src={example} alt="website screenshot" />
          <button>View Project</button>
        </div>
      </div>
      */
