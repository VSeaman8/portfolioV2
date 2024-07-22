import { useState } from "react";

const RockPaperScissorsGame = () => {
  const options = [
    { name: "rock", img: "../../assets/images/rock.jpg" },
    { name: "paper", img: "path/to/paper/image" },
    { name: "scissors", img: "path/to/scissors/image" },
    { name: "lizard", img: "path/to/lizard/image" },
    { name: "spock", img: "path/to/spock/image" },
  ];

  const [result, setResult] = useState("");

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
    const gameResult = checkWin(playerChoice, computerChoice);
    setResult(gameResult);
  };

  return (
    <div>
      <h2>Rock, Paper, Lizard, Spock!</h2>
      <div>
        {options.map((option) => (
          <button
            key={option.name}
            onClick={() => playGame(option.name)}
            style={{ border: "none", background: "none" }}
          >
            <img
              src={option.img}
              alt={option.name}
              style={{ width: "100px", height: "100px" }}
            />
          </button>
        ))}
      </div>
      {result && <p>{result}</p>}
      <button onClick={() => setResult("")}>Play Again</button>
    </div>
  );
};

export default RockPaperScissorsGame;
