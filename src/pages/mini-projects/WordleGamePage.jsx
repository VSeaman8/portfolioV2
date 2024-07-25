import WordleGame from "./WordleGame.jsx";

const WordleGamePage = () => {
  return (
    <div className="mainGameContainer">
      <h2>Wordle</h2>
      <h3>Have you ever tried Wordle? If not, give it a shot!</h3>
      <p>
        Type your guess for the word in the box below. When you have a letter in
        the right position it will show in the hint
      </p>
      <WordleGame />
    </div>
  );
};

export default WordleGamePage;
