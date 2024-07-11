import { Link } from "react-router-dom";
import ProjectSummaries from "../components/ProjectSummaries.jsx";

import "./HomePage.css";
import profilePic from "../assets/images/victoriaSeamanProfile.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Homepage = () => {
  return (
    <>
      <div className="hero">
        <h1>Hi, I'm Vicki | Junior Software Engineer</h1>
        <div className="socialLinks">
          <a
            href="https://github.com/VSeaman8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="heroIcons" />{" "}
          </a>
          <a
            href="https://linkedin.com/in/victoria-seaman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="heroIcons" />
          </a>
          {/*<FontAwesomeIcon icon={faEnvelope} className="heroIcons" />*/}
        </div>
        <h2>
          I love knowledge | I'm a lifelong learner | I may have so many books
          that I can call them a library
        </h2>
      </div>
      <div className="container">
        <div className="mySkillsContainer">
          <h2 className="skillsTitle titleh2">
            My <span>Skills</span>
          </h2>
          <img src={profilePic} alt="my picture" className="profile" />
          <div className="techskills">
            <ol>
              <li>React</li>
              <li>JavaScript</li>
              <li>Express</li>
              <li>HTML 5</li>
              <li>Mocha</li>
              <li>Git</li>
              <li>Node.js</li>
              <li>Jest</li>
              <li>CSS</li>
              <li>MongoDB</li>
              <li>Python</li>
              <li>Scrum</li>
            </ol>
          </div>
          <div className="bio">
            <h3 className="bioTitle">I Love Knowledge</h3>
            <p>
              I am passionate about knowledge and technology. With 15 years of
              experience in the library service, where I enhanced user
              experiences and modernized services, I am now diving into the
              world of software engineering. My journey has always been about
              showing people how technology can improve their lives. Keep
              reading to learn more about my tech adventures and career pivot.
            </p>
            <div className="biolink">
              <Link to="/About">Keep reading my bio</Link>
            </div>
          </div>
        </div>
        <div className="projects">
          <h2 className="projectsTitle titleh2">
            <span>Projects</span>
          </h2>
          <ProjectSummaries />
        </div>
        <div className="contactContainer titleh2">
          <h2>
            Let's have a <span>chat</span>
          </h2>
        </div>
      </div>
    </>
  );
};

export default Homepage;
