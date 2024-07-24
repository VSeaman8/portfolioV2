import { useState } from "react";
import lizard from "../../assets/images/lizard.jpg";
import paper from "../../assets/images/paper.jpg";
import rock from "../../assets/images/rock.jpg";
import scissors from "../../assets/images/scissors.jpg";
import spock from "../../assets/images/spock.jpg";

const RockPaperScissorsGame = () => {
  const options = [
    { name: "Rock", img: rock },
    { name: "Paper", img: paper },
    { name: "Scissors", img: scissors },
    { name: "Lizard", img: lizard },
    { name: "Spock", img: spock },
  ];

  const [result, setResult] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [playerChoice, setPlayerChoice] = useState("");

  const getComputerChoice = () => {
    const randomChoice =
      options[Math.floor(Math.random() * options.length)].name;
    return randomChoice;
  };

  const checkWin = (player, computer) => {
    console.log(`You chose: ${player}, Computer chose: ${computer}`);

    const winMap = {
      rock: {
        winsAgainst: ["scissors", "lizard"],
        losesTo: ["paper", "spock"],
      },
      paper: {
        winsAgainst: ["rock", "spock"],
        losesTo: ["scissors", "lizard"],
      },
      scissors: {
        winsAgainst: ["paper", "lizard"],
        losesTo: ["rock", "spock"],
      },
      lizard: {
        winsAgainst: ["paper", "spock"],
        losesTo: ["rock", "scissors"],
      },
      spock: {
        winsAgainst: ["scissors", "rock"],
        losesTo: ["paper", "lizard"],
      },
    };

    if (player === computer) {
      return "It's a Tie!";
    }

    const result = winMap[player].winsAgainst.includes(computer)
      ? "You win!"
      : winMap[player].losesTo.includes(computer)
      ? "You lose!"
      : "Invalid choice";

    return result;
  };

  const playGame = (playerChoice) => {
    const computerChoice = getComputerChoice();
    setComputerChoice(computerChoice);
    setPlayerChoice(playerChoice);
    const gameResult = checkWin(playerChoice, computerChoice);
    setResult(gameResult);
  };

  return (
    <div className="rockPaperGame">
      <div className="gameContainer">
        {options.map((option) => (
          <button
            key={option.name}
            onClick={() => playGame(option.name)}
            className="gameButton"
          >
            <img src={option.img} alt={option.name} className="gameImage" />
          </button>
        ))}
      </div>
      {result && (
        <div className="resultContainer">
          <p>{result}</p>
          <p>You Chose: {playerChoice}</p>
          <p>Computer Chose: {computerChoice}</p>
        </div>
      )}
    </div>
  );
};

export default RockPaperScissorsGame;
