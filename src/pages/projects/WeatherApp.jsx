import "./Projects.css";

import WeatherAppScreen from "../../assets/images/weathersearchreact.png";

const WeatherApp = () => {
  return (
    <div className="projectContainer">
      <h1>WeatherApp</h1>
      <p className="projectSummary">
        My first React project, creating a Weather website as part of the
        SheCodes React workshop.
      </p>
      <div className="projectDetails">
        <div className="type">
          <strong className="projectDetailsText">Type</strong>
          <span className="spanText">SheCodes Workshop</span>
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
              href="https://github.com/VSeaman8/react-weather"
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
              href="https://astonishing-hotteok-56eee1.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Website </span>
            </a>
          </div>
        </div>
      </div>

      <div className="image-container">
        <a
          href="https://celebrated-kataifi-d85eef.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={WeatherAppScreen} alt="website screenshot" />
        </a>
      </div>
      <div className="purposeContainer">
        <h3>Project Purpose and Goal</h3>
        <p>
          The goal of this project was to create my first React application,
          utilizing my newly acquired knowledge of React. The objective was to
          build a functional weather website that fetches and displays weather
          data from an API.
        </p>
      </div>
      <div className="webStack">
        <h3>Web Stack and Explanation</h3>
        <p>
          This project focused on learning and using React. The web stack was
          predetermined to reinforce my understanding and skills in using this
          JavaScript library.
        </p>
      </div>
      <div className="problemProcess">
        <h3>Problems and Thought Process</h3>
        <p>
          As this was a learning workshop, the primary focus was on
          understanding and applying React concepts. The main challenge was
          ensuring that I grasped the fundamentals of React, including component
          creation, state management, and API integration. Ensuring a solid
          foundation in these areas was crucial for my future projects.
        </p>
      </div>
      <div className="lessonLearnt">
        <h3>Lessons Learned</h3>
        <p>
          This project answered many questions about how complex websites are
          created and where they source their data. It built on my existing
          knowledge and satisfied my curiosity about web development. The
          hands-on experience with React provided a strong base for more
          advanced projects.
        </p>
      </div>
      <div className="furtherWork">
        <h3>Futher Work</h3>
        <p>
          I orginally created my first react app with minimal CSS. It would be
          nice to upgrade the css to make it a little more readable.{" "}
        </p>
      </div>
    </div>
  );
};

export default WeatherApp;
