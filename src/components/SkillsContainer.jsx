import { Link } from "react-router-dom";

import "./SkillsContainer.css";
import profilePic from "../assets/images/victoriaSeamanProfile.jpg";
import profileExmaple from "../assets/images/jigar-panchal-8BAyCFRCHqY-unsplash.jpg";

const SkillsContainer = () => {
  return (
    <div className="mySkillsContainer">
      <h2 className="skillsTitle titleh2">
        My <span>Skills</span>
      </h2>
      <img
        src={profilePic}
        alt="my picture"
        className="profile"
        style={{ borderRadius: "30px" }}
      />
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
          experience in the library service, where I enhanced user experiences
          and modernized services, I am now diving into the world of software
          engineering. My journey has always been about showing people how
          technology can improve their lives. Keep reading to learn more about
          my tech adventures and career pivot.
        </p>
        <div className="biolink">
          <Link to="/About">Keep reading my bio</Link>
        </div>
      </div>
    </div>
  );
};

export default SkillsContainer;
