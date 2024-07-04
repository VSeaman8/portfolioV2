import "./HomePage.css";
import profilePic from "../assets/images/victoriaSeamanProfile.jpg";

const Homepage = () => {
  return (
    <div className="container">
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
      <div className="mySkillsContainer">
        <h3>My Skills</h3>
        <img src="" alt="my picture" />
        <div className="techskills">
          <ol> React </ol>
          <ol>JavaScrip</ol>
          <ol>Express</ol>
          <ol>HTML 5</ol>
          <ol>Mocha</ol>
          <ol>Git</ol>
          <ol>Node.js</ol>
          <ol>Jest</ol>
          <ol>CSS</ol>
          <ol>MongoDB</ol>
          <ol>Scrum</ol>
        </div>
        <div className="projectSummaries">
          <h2>Projects</h2>
          <div className="project">
            <h3>STACK</h3>
            <h3>Title</h3>
            <div className="stackList">
              <ol></ol>
            </div>
            <p>Summary here</p>
            <img src="" alt="website screenshot" />
            <button>View Project</button>
          </div>
        </div>
      </div>
      <div className="contactContainer">
        <h3>Let's have a chat</h3>
      </div>
    </div>
  );
};

export default Homepage;
