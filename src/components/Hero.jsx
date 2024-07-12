import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./Hero.css";

const Hero = () => {
  return (
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
  );
};

export default Hero;
