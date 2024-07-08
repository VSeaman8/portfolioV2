import ProjectSummaries from "../components/ProjectSummaries.jsx";

import "./HomePage.css";
import profilePic from "../assets/images/victoriaSeamanProfile.jpg";

const Homepage = () => {
  return (
    <>
      <div className="hero">
        <h1>Hi, I'm Vicki | Software Engineer</h1>
        <div className="socialLinks">
          <div>Github</div>
          <div>LinkedIn</div>
        </div>
        <p>
          3 things about me draft (I love knowledge, I'm a lifelong learner and
          I may have enough books that I can call it a library)
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
              <li>Scrum</li>
            </ol>
          </div>
          <div className="bio">
            <h3>The Quick me</h3>
            <p>
              I have always loved technology and feel almost a sense of awe in
              what we have create. Working within the library service over the
              last 15 years has shown me the joy of bringing a world to a
              technological stand
            </p>
            <div className="biolink">Keep reading my bio</div>
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
