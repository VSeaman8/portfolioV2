import { Link } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import ProjectSummaries from "../components/ProjectSummaries.jsx";
import SkillsContainer from "../components/SkillsContainer.jsx";

import "./HomePage.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Homepage = () => {
  return (
    <>
      <div className="heroContainer">
        <Hero />
      </div>

      <div className="container">
        <SkillsContainer />
        <div className="projects">
          <div>
            <h2 className="projectsTitle titleh2">
              <span>Projects</span>
            </h2>
          </div>
          <ProjectSummaries />
        </div>
        <div className="contactContainer titleh2">
          <h2>
            Let's have a <span>chat</span>
          </h2>
          <div className="emailContainer">
            <a href="mailto:vuseaman@gmail.com" className="emailIcon">
              <FontAwesomeIcon icon={faEnvelope} className="IconStyle" />
              <span className="emailText">vuseaman@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
