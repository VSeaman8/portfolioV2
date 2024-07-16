import dungeon from "../../assets/images/dndgenerator.png";
import "./Projects.css";

const DungeonsCharGenerator = () => {
  return (
    <div className="projectContainer">
      <h1>Dungeons and Dragons Generator</h1>
      <p className="projectSummary">
        This project focuses on developing a straightforward frontend website
        that integrates a third-party API to generate quick character profiles
        for users. It emphasizes rigorous management and randomization of data
        retrieved from the API.
      </p>
      <div className="projectDetails">
        <div className="type">
          <strong className="projectDetailsText">Type</strong>
          <span>Training Project</span>
        </div>
        <div className="stack">
          <strong className="projectDetailsText">Stack</strong>
          <ol>
            <li>React</li>
            <li>JavaScript</li>
            <li>CSS</li>
          </ol>
        </div>
        <div className="code">
          <strong className="projectDetailsText">Code</strong>
          <div className="code">
            <a
              href="https://github.com/VSeaman8/DandDGenerator"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Github Repository</span>
            </a>
          </div>
        </div>
        <div className="live">
          <strong className="projectDetailsText">Live</strong>
          <div>
            <a
              href="https://rainbow-dieffenbachia-2e009a.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Website</span>
            </a>
          </div>
        </div>
      </div>
      <div className="image-container">
        <img src={dungeon} alt="website screenshot" />
      </div>
      <div className="purposeContainer">
        <h3>Project Purpose and Goal</h3>
        <p>
          The goal of this project is to practice randomising data from an API
          and to reinforce what I have learned about coding and managing
          projects.
        </p>
      </div>
      <div className="webStack">
        <h3>Web Stack and Explanation</h3>
        <p>
          For this iteration I am using React I could do this as pure html but I
          want to future proof this website and add more functionality later
          especially when there will be an option to save the created character
          and have a global log in
        </p>
      </div>
      <div className="problemProcess">
        <h3>Problems and Thought Process</h3>
        <p>
          Initially I have created a business case to work from so that I can
          practice managing this project. This also enabled me to think about
          what I want this website to do in the future and had fun planning
          later iterations of this project. For now in this iteration the
          website will only create a randomised character. The user will not be
          able to change any input in this iteration of the website. This is all
          about making sure that all the pieces of data work together as there
          is a lot of data to manipulate - about 30-40 individual pieces of
          data. Having written the business case and created wireframes on Figma
          I suddenly found that what had seemed simple in concept was actually
          more complicated in reality both in ensuring that each piece of data
          was showing correctly and also how to call such a large amount of
          information from the API and randomise it.
        </p>
      </div>
      <div className="lessonLearnt">
        <h3>Current Status</h3>
        <p>
          Most of the static work has been done on the website. Ability scores
          and modifiers are now randomised. The next task is to work on how to
          call and randomise data from API
        </p>
      </div>
      {/* <div className="furtherWork">
        <h3>Futher Work</h3>
        <p>Further work explained and conclusion if needed</p>
      </div> */}
    </div>
  );
};

export default DungeonsCharGenerator;
