import { useState, useEffect } from "react";

const WordleGame = () => {
  const wordList = [
    "apple",
    "brave",
    "crate",
    "drove",
    "eager",
    "flame",
    "grape",
    "hover",
    "igloo",
    "jolly",
    "knock",
    "laugh",
    "magic",
    "noble",
    "ocean",
    "pride",
    "queen",
    "roast",
    "sharp",
    "trust",
    "under",
    "vivid",
    "waltz",
    "xenon",
    "yield",
    "zebra",
    "adobe",
    "beach",
    "charm",
    "dream",
    "earth",
    "fancy",
    "greet",
    "habit",
    "ideal",
    "jumps",
    "kneel",
    "lemon",
    "might",
    "nifty",
    "orbit",
    "piano",
    "quilt",
    "reign",
    "shiny",
    "tiger",
    "urban",
    "vital",
    "whale",
    "youth",
    "zonal",
    "angel",
    "blend",
    "craft",
    "drift",
    "eagle",
    "frost",
    "globe",
    "hobby",
    "input",
    "jewel",
    "knock",
    "linen",
    "mango",
    "night",
    "otter",
    "pearl",
    "quick",
    "raven",
    "sneak",
    "tease",
    "ultra",
    "valve",
    "wrath",
    "yeast",
    "zealot",
  ];

  const [secretWord, setSecretWord] = useState("");
  const [guess, setGuess] = useState("");
  const [hint, setHint] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const word = wordList[Math.floor(Math.random() * wordList.length)];
    setSecretWord(word);
    setHint(Array(word.length).fill("_"));
  }, []);

  console.log("Welcome to the Word Guessing Game");

  const handleGuessChange = (e) => {
    setGuess(e.target.value.toLowerCase());
  };

  const handleGuessSubmit = () => {
    if (guess.length !== secretWord.length) {
      setMessage("Your guess must be the same length as the secret word!");
      return;
    }

    const newHint = [...hint];
    for (let i = 0; i < secretWord.length(); i++) {
      if (secretWord[i] === guess[i]) {
        newHint[i] = guess[i];
      }
    }

    setHint(newHint);
    setGuess("");

    if (newHint.join("") === secretWord) {
      setMessage("Congratulations! You guessed the word!");
    } else {
      setMessage("Keep Guessing");
    }

    return (
      <div>
        <h2>Welcome to the Word Guessing Game</h2>
        <p>Your hint is: {hint.join(" ")}</p>
        <input
          type="text"
          value={guess}
          onChange={handleGuessChange}
          maxLength={secretWord.length}
        />
        <button onclick={handleGuessSubmit}>Submit Guess</button>
        <p>{message}</p>
      </div>
    );
  };
};

export default WordleGame;
