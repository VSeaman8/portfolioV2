import { Link } from "react-router-dom";
import NavigationButton from "../functions/NavigationButton.jsx";

import "./ProjectSummaries.css";
import dictionary from "../assets/images/dictionaryv1.png";
import dungeon from "../assets/images/dndgenerator.png";
import travel from "../assets/images/travelinfowebsite.png";
import weather from "../assets/images/weatherengine.png";

const ProjectSummaries = () => {
  return (
    <div className="projectContainer">
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
          <div className="imgContainer card_box">
            <Link to="/project1">
              <img src={dungeon} alt="website screenshot" />
            </Link>
            <span></span>
          </div>
          <NavigationButton to="/project1"></NavigationButton>
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
          <div className="imgContainer card_box">
            <Link to="/project2">
              <img src={travel} alt="website screenshot" />
              <span></span>
            </Link>
          </div>
          <NavigationButton to="/project2"></NavigationButton>
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
            For my first React project, I developed a weather search engine
            using a third-party API to fetch and display real-time weather
            information. Users can enter a city name to retrieve current weather
            conditions, including temperature and humidity, with dynamic updates
            based on their input. This project enhanced my understanding of
            React, API integration, and user interface design.
          </p>
          <div className="imgContainer card_box">
            <Link to="/project4">
              <img src={weather} alt="website screenshot" />
              <span></span>
            </Link>
          </div>
          <NavigationButton to="/project3"></NavigationButton>
        </div>
      </div>
      {/* Project 4 */}
      <div className="projectSummaries">
        <div className="project">
          <h3>Frontend</h3>
          <h2>Dictionary</h2>
          <div className="stackList techskills">
            <ol>
              <li>React</li>
              <li>Express</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ol>
          </div>
          <p className="summary">
            This project, part of the SheCodes add-on workshop, involved
            creating a simple dictionary using newly acquired React skills. The
            main objective was to practice building a React application and
            integrating third-party APIs to fetch and display dictionary
            definitions.
          </p>
          <div className="imgContainer card_box">
            <Link to="/project4">
              <img src={dictionary} alt="website screenshot" />
              <span></span>
            </Link>
          </div>
          <NavigationButton to="/project3"></NavigationButton>
        </div>
      </div>
      {/* Project 5 */}
      {/* <div className="projectSummaries">
        <div className="project">
          <h3>Frontend</h3>
          <h2>Mini Projects Fun Page</h2>
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
          <div className="imgContainer card_box">
          <Link to="/project5"
            <img src={example} alt="website screenshot" />
            <span></span>
            </Link>
          </div>
          <NavigationButton to="/project5"></NavigationButton>
        </div>
      </div> */}
    </div>
  );
};
export default ProjectSummaries;

/* template for each project
  <div className="projectSummaries">
        <div className="project">
          <h3>frontend</h3>
          <h2>Title</h2>
          <div className="stackList techskills">
            <ol>
              <li>React</li>
              <li>CSS</li>
              <li>html</li>
            </ol>
          </div>
          <p className="summary">
            
          </p>
          <div className="imgContainer card_box">
            <Link to="/project1">
              <img src={portrait} alt="website screenshot" />
            </Link>
            <span></span>
          </div>
          <NavigationButton to="/project1"></NavigationButton>
        </div>
      */
