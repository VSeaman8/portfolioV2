import { Link } from "react-router-dom";
import ProjectSummaries from "../components/ProjectSummaries.jsx";

import "./HomePage.css";
import profilePic from "../assets/images/victoriaSeamanProfile.jpg";

const Homepage = () => {
  return (
    <>
      <div className="hero">
        <h1>Hi, I'm Vicki | Junior Software Engineer</h1>
        <div className="socialLinks">
          <div>Github</div>
          <div>LinkedIn</div>
        </div>
        <p>
          I love knowledge | I'm a lifelong learner | I may have so many books
          that I can call them a library
        </p>
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
            <h3 className="bioTitle">I Love Technology</h3>
            <p>
              I love helping people with technology. With a background in the
              library service, where I spent 15 years enhancing user
              experiences, I am now diving into the world of software
              engineering. My journey has been all about showing people how
              technology can improve their lives. Keep reading my bio to learn
              more about my tech adventures and career pivots
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
        <div className="contactContainer">
          <h3>Let's have a chat</h3>
        </div>
      </div>
    </>
  );
};

export default Homepage;
