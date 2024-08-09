const SimonSays = () => {
  return (
    <div>
      <h2 className="level-title">Press A Key to Start</h2>
      <div className="container">
        <div className="row">
          <button type="button" className="btn green"></button>
          <button type="button" className="btn red"></button>
        </div>
        <div className="row">
          <button type="button" className="btn yellow"></button>
          <button type="button" className="btn blue"></button>
        </div>
      </div>
    </div>
  );
};

export default SimonSays;
