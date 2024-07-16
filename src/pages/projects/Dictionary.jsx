import dictionaryScreen from "../../assets/images/dictionaryv1.png";

const Dictionary = () => {
  return (
    <div className="projectContainer">
      <h1>Dictionary</h1>
      <p className="projectSummary">
        The Dictionary website was part of the SheCodes workshop, building on
        the basics of React taught previously using third-party APIs.
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
              href="https://github.com/VSeaman8/dictionary-project-v1"
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
              href="https://fascinating-salamander-18aa85.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Website</span>
            </a>
          </div>
        </div>
      </div>
      <div className="image-container">
        <a
          href="https://fascinating-salamander-18aa85.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={dictionaryScreen} alt="website screenshot" />
        </a>
      </div>
      <div className="purposeContainer">
        <h3>Project Purpose and Goal</h3>
        <p>
          This project was part of the SheCodes add-on workshop. The goal was to
          use the newly acquired knowledge of React to create a simple
          dictionary. The objective was to practice creating a React project and
          integrating third-party APIs to fetch and display dictionary
          definitions.
        </p>
      </div>
      <div className="webStack">
        <h3>Web Stack and Explanation</h3>
        <p>
          This workshop focused on building on the basic knowledge of React, so
          the web stack was predetermined. The project utilized React to
          reinforce understanding and proficiency in using this powerful
          JavaScript library.
        </p>
      </div>
      <div className="problemProcess">
        <h3>Problems and Thought Process</h3>
        <p>
          The planning and structure for this project were provided, so the
          focus was on implementation. This highlighted the importance of
          working within predefined constraints and following a structured plan.
          While this approach limited the need for independent problem-solving,
          it provided valuable insights into the workflow.
        </p>
      </div>
      <div className="lessonLearnt">
        <h3>Lessons Learned</h3>
        <p>
          This project reinforced my understanding of React from the previous
          workshop and served as a great foundation for future projects. It was
          an excellent opportunity to see how much I had learned and to prepare
          for more advanced projects in the Digital Futures Academy. Creating
          this project showed my growth in React and provided a solid base for
          further development.
        </p>
      </div>
    </div>
  );
};

export default Dictionary;
