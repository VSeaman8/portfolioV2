import RockPaperScissorsGame from "./RockPaperScssorsGame.jsx";

const RockPaperScissorsGamePage = () => {
  return (
    <div className="mainGameContainer">
      <h2>Rock, Paper, Lizard, Spock</h2>
      <h3>This is a little twist on the rock, Paper, Scissors game.</h3>
      <p>
        Click on one of the pictures below to make a choice and see you can can
        beat the computer!
      </p>
      <RockPaperScissorsGame />
    </div>
  );
};

export default RockPaperScissorsGamePage;
