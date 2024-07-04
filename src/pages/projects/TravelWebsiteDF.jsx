export default TravelWebsite = () => {
  return (
    <div className="projectContainer">
      <h1>Project title</h1>
      <p className="projectSummary">
        This is where the summary of the project goes
      </p>
      <div>
        <div className="type">
          {" "}
          <strong>Type</strong>Training Project{" "}
        </div>
        <div className="stack">
          <strong>Stack</strong>
        </div>
        <div className="code">
          <strong>Code</strong>
        </div>
        <div className="live">
          <strong>Live</strong>
        </div>
      </div>
      <img src="" alt="screenshot of website" />
      <div className="purposeContainer">
        <h3>Project Purpose and Goal</h3>
        <p>Wordy stuff goes here</p>
      </div>
      <div className="webStack">
        <h3>Web Stack and Explanation</h3>
        <p>explaination here</p>
      </div>
      <div className="problemProcess">
        <h3>Problems and Thought Process</h3>
        <p>process here</p>
      </div>
      <div className="lessonLearnt">
        <h3>Lessons Learned</h3>
        <p>My lessons are explained here</p>
      </div>
      <div className="furtherWork">
        <h3>Futher Work</h3>
        <p>Further work explained and conclusion if needed</p>
      </div>
    </div>
  );
};
